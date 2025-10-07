import { useSetIsFavorite } from "@/app/providers/favorite-provider/hooks";
import { useCallback } from "react";

interface FavoriteButtonProps {
  racketId: number;
  isFavorite: boolean;
}

const handlerFavorite = async ({
  isFavorite,
  racketId,
}: FavoriteButtonProps) => {
  const url = `${process.env.NEXT_PUBLIC_RACKET_API}/product/${racketId}/favorite`;

  return isFavorite
    ? fetch(url, {
        credentials: "include",
        method: "DELETE",
      })
    : fetch(url, {
        credentials: "include",
        method: "POST",
      });
};

export const FavoriteButton = ({
  racketId,
  isFavorite,
}: FavoriteButtonProps) => {
  const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavorite, racketId }: FavoriteButtonProps) => {
      setFavorite({ id: racketId, isFavorite: !isFavorite });
      await handlerFavorite({ isFavorite, racketId });
    },
    [setFavorite]
  );

  return (
    <button
      type="button"
      onClick={() => handleClick({ isFavorite, racketId })}
      className="cursor-pointer text-accent h-10 flex gap-2 items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg px-4 w-full mt-4"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </button>
  );
};
