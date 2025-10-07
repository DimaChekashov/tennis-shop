"use client";

import { useContext } from "react";
import { UserContext } from "./user-provider";

export const useUser = () => {
  const { user } = useContext(UserContext);

  return user;
};
