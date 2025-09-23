import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchRacketById } from "@/shared/api/rackets";

type RacketPageProps = {
  racketId: string;
};

export const RacketPage = async ({ racketId }: RacketPageProps) => {
  const racket = await fetchRacketById(racketId);

  if (!racket) notFound();

  return (
    <div className="grid gap-6 lg:gap-10 lg:grid-cols-4">
      <div className="lg:pt-6">
        <div className="text-heading lg:text-xl mb-2">{racket.model}</div>
        <h1 className="text-heading text-xl lg:text-2xl mb-4">{racket.name}</h1>
        <p className="text-text text-sm lg:text-base">{racket.description}</p>
      </div>
      <div className="border border-border relative aspect-3/4 max-w-md order-first lg:max-w-full lg:order-none lg:col-span-2">
        <Image
          src={racket.imageUrl}
          alt={racket.name}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <div className="lg:pt-6">
        <p className="text-heading text-xl lg:text-2xl">
          Цена: {racket.price}$
        </p>
      </div>
    </div>
  );
};
