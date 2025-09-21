import Image from "next/image";
import Link from "next/link";
import { fetchRockets } from "@/shared/api/fetchRockets";
import { RacketType } from "@/shared/lib/types";

export const HomePage = async () => {
  const rackets = await fetchRockets().then((res) => res.json());

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl">Ракетки</h1>
        <Link href="/rackets" className="flex items-center gap-2 text-accent">
          Все{" "}
          <svg
            width="32"
            height="32"
            viewBox="0 0 512 512"
            fill="#3b82f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M391.344 141L506 255.656L391.344 370.311L378.584 357.551L471.456 264.679H6V246.633H471.456L378.584 153.76L391.344 141Z"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {rackets.map((racket: RacketType) => (
          <Link href={`/racket/${racket.id}`} key={`racket-id-${racket.id}`}>
            <div className="border border-border relative aspect-3/4 mb-4">
              <Image
                src={racket.imageUrl}
                alt={racket.name}
                fill={true}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="text-heading text-xl">{racket.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
