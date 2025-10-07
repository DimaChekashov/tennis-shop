"use server";

import { ROUTES } from "@/shared/lib/consts";
import { parseSetCookie } from "@/shared/lib/helpers";
import { LoginState } from "@/shared/lib/types";
import { cookies } from "next/headers";

export const signUpAction = async (_: LoginState, formData: FormData) => {
  const login = formData.get("login")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/auth/signup`,
    {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (result.status !== 200) {
    return {
      error: "Invalid login or password",
    };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return {
    error: "",
    redirectTo: ROUTES.home,
  };
};
