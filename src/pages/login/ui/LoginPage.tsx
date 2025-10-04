"use client";

import { LoginState } from "@/shared/lib/types";
import { Field } from "@/shared/ui";
import { useActionState, useEffect } from "react";
import { loginAction } from "../api/login-action";

export const LoginPage = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(loginAction, { error: "" });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action={formAction}
        className="flex flex-col gap-4 bg-gray-900 p-8 pb-10 rounded-2xl"
      >
        <Field label="Login" name="login" required />
        <Field label="Password" name="password" type="password" />
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          disabled={isPending}
          className="cursor-pointer mt-2 px-2 py-2 bg-accent text-white rounded"
        >
          Войти
        </button>
      </form>
    </div>
  );
};
