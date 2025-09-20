"use client";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../model/conts";
import { HeaderLinkType } from "../model/types";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 justify-end">
      {links.map(({ label, href }: HeaderLinkType, idx) => (
        <Link
          className={cn(pathname === href && "text-accent")}
          href={href}
          key={`header-link-${idx}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
