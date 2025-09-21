import Link from "next/link";
import { fetchRackets } from "@/shared/api/fetchRackets";
import { RacketType } from "@/shared/lib/types";
import { ROUTES } from "@/shared/lib/consts";
import { RacketItem } from "@/shared/ui";

import ArrowIcon from "@/shared/assets/images/icons/arrow.svg";
import Image from "next/image";

export const HomePage = async () => {
  const rackets = await fetchRackets().then((res) => res.json());

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl">Ракетки</h1>
        <Link
          href={ROUTES.rackets}
          className="flex items-center gap-2 text-accent transition hover:opacity-70"
        >
          Все <Image src={ArrowIcon} alt="Иконка стрелки" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-3 md:gap-10">
        {rackets.map((racket: RacketType) => (
          <RacketItem key={racket.id} racket={racket} isLargeHeading={true} />
        ))}
      </div>
    </>
  );
};
