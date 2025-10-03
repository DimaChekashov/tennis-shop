import { cookies } from "next/headers";
import { Response, UserType } from "../lib/types";

export const getUser = async (): Promise<Response<UserType>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/user`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: UserType } = await result.json();

  return { isError: false, data: data.user };
};
