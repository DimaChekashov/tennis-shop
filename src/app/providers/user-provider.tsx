"use client";

import { UserType } from "@/shared/lib/types";
import { createContext, PropsWithChildren } from "react";

interface UserContextType {
  user: UserType | undefined;
}

export const UserContext = createContext<UserContextType>({ user: undefined });

interface UserProviderProps extends PropsWithChildren {
  user: UserType | undefined;
}

export const UserProvider = ({ user, children }: UserProviderProps) => {
  return <UserContext value={{ user }}>{children}</UserContext>;
};
