import Link from "next/link";
import { ROUTES } from "../lib/consts";
import { RacketType } from "../lib/types";
import React from "react";
import Image from "next/image";
import classNames from "classnames";

type RacketItemType = {
  racket: RacketType;
  isLargeHeading?: boolean;
};

export const RacketItem: React.FC<RacketItemType> = ({
  racket,
  isLargeHeading = false,
}) => {
  return (
    <Link
      href={ROUTES.racket(racket.id)}
      prefetch={false}
      className="group block"
    >
      <div className="border border-border relative aspect-3/4 mb-4">
        <Image
          src={racket.imageUrl}
          alt={racket.name}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div
        className={classNames(
          "text-heading transition group-hover:text-accent",
          isLargeHeading ? "lg:text-xl" : "lg:text-lg"
        )}
      >
        {racket.name}
      </div>
    </Link>
  );
};
