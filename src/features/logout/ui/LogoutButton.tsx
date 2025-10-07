"use client";

import { useTransition } from "react";
import { logout } from "../api/logout";
import { ROUTES } from "@/shared/lib/consts";
import { useUser } from "@/app/providers/user-provider/hooks";
import Link from "next/link";

const handleLogout = async () => {
  await logout();

  location.assign(ROUTES.home);
};

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const user = useUser();

  if (user === undefined) {
    return (
      <Link
        className="px-6 py-2 text-white rounded cursor-pointer bg-accent"
        href={ROUTES.login}
      >
        Войти
      </Link>
    );
  }

  return (
    <button
      className="px-6 py-2 text-white rounded cursor-pointer bg-gray-400"
      disabled={isPending}
      onClick={() => startTransition(handleLogout)}
    >
      Выйти
    </button>
  );
};
