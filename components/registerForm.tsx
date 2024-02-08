"use client";
import React, { useState, useTransition } from "react";
import { AuthFormContainer } from "../containers/containers";
import { Button, Input, MobileInput, Toast } from "./components";
import { useRouter } from "next/navigation";
import { register } from "@/action/auth/register";
import toast from "react-hot-toast";

type Props = {};

const Register = (props: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [values, setValues] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  async function onSubmit() {
    startTransition(() => {
      register(values).then((data) => {
        data.success && toast.success(data.success)
        data.error && toast.error(data.error)
        if (data.success) router.push("/auth/login");
      });
    });
  }
  return (
    <>
      <AuthFormContainer
        heading="Create new account"
        link="/auth/login"
        linkText="Already have an account? Login."
      >
        <form className="flex flex-col w-full gap-3">
          <Input
            title="Fullname"
            placeholder="eg: Jhon Doe"
            disabled={isPending}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <MobileInput
            title="Mobile Number"
            disabled={isPending}
            value={values.phoneNumber}
            onChange={(e) =>
              setValues({ ...values, phoneNumber: e.target.value })
            }
          />
          <Input
            title="Email"
            placeholder="example@company.com"
            type="email"
            disabled={isPending}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Input
            title="Password"
            placeholder="************"
            type="password"
            disabled={isPending}
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <div className="mt-2">
            <Button disabled={isPending} onClick={onSubmit}>
              Register
            </Button>
            <p className="text-[12px]  mt-4">
              By continuing, you agree to{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                onClick={() => router.push("/")}
              >
                Hrishabh Jain's
              </span>{" "}
              Conditions of Use and Privacy Notice.
            </p>
          </div>
        </form>
      </AuthFormContainer>
    </>
  );
};

export default Register;
