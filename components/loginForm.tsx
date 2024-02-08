"use client";
import React, { useState, useTransition } from "react";
import { AuthFormContainer } from "../containers/containers";
import { Button, Input} from "./components";
import { useRouter } from "next/navigation";
import { login } from "@/action/auth/login";
import toast from "react-hot-toast";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  async function onSubmit() {
    startTransition(() => {
      login(values).then((data) => {
        data.success && toast.success(data.success)
        data.error && toast.error(data.error)
        if (data.success) router.push("/dashboard");
      });
    });
  }
  return (
    <>
      <AuthFormContainer
        heading="Welcome Back"
        link="/auth/register"
        linkText="Don't have an account? Create one."
      >
        <form className="flex flex-col w-full gap-3">
          <Input
            title={"Email"}
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
            <Button disabled={isPending} onClick={onSubmit}>Login</Button>
            <p className="text-[12px]  mt-4">
              By continuing, you agree to{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                onClick={() => router.push("/")}
              >
                Hrishabh Jain&apos;s
              </span>{" "}
              Conditions of Use and Privacy Notice.
            </p>
          </div>
        </form>
      </AuthFormContainer>
    </>
  );
};

export default Login;
