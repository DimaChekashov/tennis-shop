"use client";

import React, { use, useState } from "react";
import { RacketType, Response } from "@/shared/lib/types";
import { RacketsFilter } from "./RacketsFilter";
import { BRANDS_ALL } from "@/shared/lib/consts";
import { RacketItem } from "@/shared/ui";

interface RacketsPageProps {
  racketsPromise: Promise<Response<RacketType[]>>;
}

export const RacketsPage: React.FC<RacketsPageProps> = ({ racketsPromise }) => {
  const { isError, data } = use(racketsPromise);
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS_ALL);

  if (isError) {
    throw new Error("error");
  }

  if (data === undefined) return <>Список ракеток пуст!</>;

  const brandsNames: string[] = Array.from(
    new Set(data.map((racket: RacketType) => racket.brand.name))
  );

  return (
    <div className="mt-6 grid gap-4 lg:gap-10 md:grid-cols-4">
      <div>
        <div className="text-text text-lg mb-2">Бренд</div>
        <RacketsFilter
          brands={brandsNames}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-heading text-4xl mb-8">Ракетки</h1>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {data
            .filter((racket: RacketType) => {
              if (selectedBrand === BRANDS_ALL) return true;
              return racket.brand.name === selectedBrand;
            })
            .map((racket: RacketType) => (
              <RacketItem racket={racket} key={racket.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
