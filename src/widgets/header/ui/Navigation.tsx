"use client";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../model/conts";
import { HeaderLinkType } from "../model/types";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 justify-center md:justify-end">
      {links.map(({ label, href }: HeaderLinkType, idx) => (
        <Link
          key={idx}
          href={href}
          className={cn(
            "transition hover:opacity-70",
            pathname === href && "text-accent"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};
