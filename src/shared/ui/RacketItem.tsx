import Link from "next/link";
import { ROUTES } from "../lib/consts";
import { RacketType } from "../lib/types";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useUser } from "@/app/providers/user-provider/hooks";

type RacketItemType = {
  racket: RacketType;
  isLargeHeading?: boolean;
};

const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {};

export const RacketItem: React.FC<RacketItemType> = ({
  racket,
  isLargeHeading = false,
}) => {
  const user = useUser();

  return (
    <div>
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
      {user !== undefined && (
        <button
          type="button"
          onClick={addToFavorite}
          className="cursor-pointer text-accent h-10 flex gap-2 items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg px-4 w-full mt-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          Добавить в избранное
        </button>
      )}
    </div>
  );
};
