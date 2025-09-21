import { ROUTES } from "@/shared/lib/consts";
import { HeaderLinkType } from "./types";

export const links: HeaderLinkType[] = [
  { label: "Главная", href: ROUTES.home },
  { label: "Ракетки", href: ROUTES.rackets },
];
