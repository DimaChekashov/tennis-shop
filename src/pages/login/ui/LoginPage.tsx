"use client";

import { LoginState } from "@/shared/lib/types";
import { useActionState, useEffect } from "react";
import { loginAction } from "../api/login-action";
import { LoginForm } from "@/shared/ui/LoginForm";

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
      <LoginForm
        title="Вход"
        buttonTitle="Войти"
        error={error}
        formAction={formAction}
        isPending={isPending}
        isLogin={true}
      />
    </div>
  );
};
