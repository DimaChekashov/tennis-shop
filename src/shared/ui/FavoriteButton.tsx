interface FavoriteButtonProps {
  racketId: number;
}

const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {};

export const FavoriteButton = ({ racketId }: FavoriteButtonProps) => {
  return (
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
  );
};
