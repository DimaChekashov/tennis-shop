"use client";

import { LoginState } from "@/shared/lib/types";
import { useActionState, useEffect } from "react";
import { signUpAction } from "../api/sign-up-action";
import { LoginForm } from "@/shared/ui/LoginForm";

export const SignUpPage = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<
    LoginState,
    FormData
  >(signUpAction, { error: "" });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoginForm
        title="Регистрация"
        buttonTitle="Зарегистрироваться"
        error={error}
        formAction={formAction}
        isPending={isPending}
      />
    </div>
  );
};
