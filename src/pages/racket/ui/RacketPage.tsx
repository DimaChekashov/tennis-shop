import Image from "next/image";

type RacketPageProps = {
  racketId: string;
};

export const RacketPage = async ({ racketId }: RacketPageProps) => {
  const rackets = await fetch("http://localhost:3000/rackets.json")
    .then((res) => res.json())
    .then((data) => [undefined, ...data]);

  const racket = rackets[Number(racketId)];

  if (!racket) return <div>404 - Page not found!</div>;

  return (
    <div className="grid grid-cols-4 gap-10 px-6">
      <div className="pt-6">
        <div className="text-heading text-xl mb-2">{racket.model}</div>
        <h1 className="text-heading text-2xl mb-4">{racket.name}</h1>
        <p className="text-text">{racket.description}</p>
      </div>
      <div className="border border-border col-span-2 relative h-220">
        <Image
          src={racket.imageUrl}
          alt={racket.name}
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="pt-6">
        <p className="text-heading text-2xl">Price: {racket.price}$</p>
      </div>
    </div>
  );
};
