import Image from "next/image";
import { RacketType } from "@/shared/lib/types";
import { FavoriteButton } from "@/shared/ui/FavoriteButton";
import { useUser } from "@/app/providers/user-provider/hooks";
import { useIsFavoriteById } from "@/app/providers/favorite-provider/hooks";

type RacketPageProps = {
  data: RacketType;
};

export const RacketPage = ({ data }: RacketPageProps) => {
  const user = useUser();

  const {
    id,
    model,
    name,
    description,
    imageUrl,
    price,
    year,
    brand,
    userData,
  } = data;

  const isFavoriteGlobal = useIsFavoriteById({
    id: id,
    isFavoriteInitial: Boolean(userData?.isFavorite),
  });

  return (
    <div className="grid gap-6 lg:gap-10 lg:grid-cols-4">
      <div className="lg:pt-6">
        <div className="text-heading lg:text-xl mb-2">{model}</div>
        <h1 className="text-heading text-xl lg:text-2xl mb-4">{name}</h1>
        <p className="text-text text-sm lg:text-base">{description}</p>
      </div>
      <div className="border border-border relative aspect-3/4 max-w-md order-first lg:max-w-full lg:order-none lg:col-span-2">
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
          src={imageUrl}
          alt={name}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="lg:pt-6">
        <p className="text-heading text-lg lg:text-1xl">Год: {year}</p>
        <p className="text-heading text-lg lg:text-1xl">Бренд: {brand.name}</p>
        <p className="text-heading text-xl lg:text-2xl mt-4">Цена: {price}$</p>
        {user !== undefined && (
          <FavoriteButton isFavorite={isFavoriteGlobal} racketId={id} />
        )}
      </div>
    </div>
  );
};
