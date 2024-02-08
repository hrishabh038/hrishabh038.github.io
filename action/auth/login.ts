"use server"
import { db } from "@/utils/db";
import bcrypt from "bcrypt"

export async function login(values: any) {
    const {
        email, password
    } = values;

    if (!email || !password) {
        return {
            status: 400,
            error: "User details missing",
            bool: false
        }
    }

    const isExisting__email = await db.user.findUnique({
        where: {
            email
        }
    })
    if (!isExisting__email) return {
        status: 404,
        error: "Email not found",
        bool: false
    }

    const hashedPassword = await bcrypt.compare(password, isExisting__email.password)
    if (!hashedPassword) {
        return {
            status: 404,
            error: "Wrong password",
            bool: false
        }
    }

    return {
        status: 200,
        success: "Login successful",
        bool: true
    }

}