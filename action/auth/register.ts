"use server"
import { db } from "@/utils/db";
import bcrypt from "bcrypt"

export async function register(values: any) {
    const {
        name, phoneNumber, email, password
    } = values;
    const hashedPassword = await bcrypt.hash(password,10)

    if (!name || !email || !password) {
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
    if (isExisting__email) return {
        status: 400,
        error: "Email already exists",
        bool: false
    }

    

    const newUser = await db.user.create({
        data: {
            name, phoneNumber, email, password:hashedPassword
        }
    })

    return {
        status: 200,
        success: "Login successful",
        bool: true
    }
}