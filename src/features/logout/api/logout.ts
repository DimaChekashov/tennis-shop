export const logout = () =>
  fetch(`${process.env.NEXT_PUBLIC_RACKET_API}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });
