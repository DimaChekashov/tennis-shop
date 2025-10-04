"use client";

import { useTransition } from "react";
import { logout } from "../api/logout";
import { ROUTES } from "@/shared/lib/consts";

const handleLogout = async () => {
  await logout();

  location.assign(ROUTES.home);
};

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="px-6 py-2 bg-gray-400 text-white rounded cursor-pointer"
      disabled={isPending}
      onClick={() => startTransition(handleLogout)}
    >
      Выйти
    </button>
  );
};
