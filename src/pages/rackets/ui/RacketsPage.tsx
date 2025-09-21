"use client";
import { RacketType } from "@/shared/lib/types";
import { RacketsFilter } from "./RacketsFilter";
import React, { useState } from "react";
import { BRANDS_ALL } from "@/shared/lib/consts";
import { RacketItem } from "@/shared/ui";

type RacketsPageType = {
  brandsNames: string[];
  racketsData: RacketType[];
};

export const RacketsPage: React.FC<RacketsPageType> = ({
  brandsNames,
  racketsData,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(BRANDS_ALL);

  return (
    <div className="mt-6 grid grid-cols-4 gap-10">
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
        <div className="grid grid-cols-4 gap-5">
          {racketsData
            .filter((racket: RacketType) => {
              if (selectedBrand === BRANDS_ALL) return true;
              return racket.brand.name === selectedBrand;
            })
            .map((racket: RacketType) => (
              <RacketItem racket={racket} key={`racket-id-${racket.id}`} />
            ))}
        </div>
      </div>
    </div>
  );
};
