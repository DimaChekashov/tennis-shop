import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchRacketById } from "@/shared/api/rackets";

type RacketPageProps = {
  racketId: string;
};

export const RacketPage = async ({ racketId }: RacketPageProps) => {
  const { data, isError } = await fetchRacketById(racketId);

  if (isError) {
    throw new Error("error");
  }

  if (!data) return notFound();

  const { model, name, description, imageUrl, price, year, brand } = data;

  return (
    <div className="grid gap-6 lg:gap-10 lg:grid-cols-4">
      <div className="lg:pt-6">
        <div className="text-heading lg:text-xl mb-2">{model}</div>
        <h1 className="text-heading text-xl lg:text-2xl mb-4">{name}</h1>
        <p className="text-text text-sm lg:text-base">{description}</p>
      </div>
      <div className="border border-border relative aspect-3/4 max-w-md order-first lg:max-w-full lg:order-none lg:col-span-2">
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
      </div>
    </div>
  );
};
