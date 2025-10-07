import Link from "next/link";
import { ROUTES } from "../lib/consts";
import { RacketType } from "../lib/types";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import { useUser } from "@/app/providers/user-provider/hooks";
import { FavoriteButton } from "./FavoriteButton";
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/app/providers/favorite-provider/hooks";

type RacketItemType = {
  racket: RacketType;
  isLargeHeading?: boolean;
};

export const RacketItem: React.FC<RacketItemType> = ({
  racket,
  isLargeHeading = false,
}) => {
  const user = useUser();

  useHydrateFavorite({
    racketId: racket.id,
    isFavorite: Boolean(racket.userData?.isFavorite),
  });

  const isFavoriteGlobal = useIsFavoriteById({
    id: racket.id,
    isFavoriteInitial: Boolean(racket.userData?.isFavorite),
  });

  return (
    <div>
      <Link
        href={ROUTES.racket(racket.id)}
        prefetch={false}
        className="group block"
      >
        <div className="relative border border-border aspect-3/4 mb-4">
          {isFavoriteGlobal && (
            <Image
              src="http://localhost:4000/bookmark.png"
              alt="bookmark"
              width={50}
              height={50}
              className="absolute top-2 right-2 z-10"
            />
          )}
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
        <FavoriteButton isFavorite={isFavoriteGlobal} racketId={racket.id} />
      )}
    </div>
  );
};
