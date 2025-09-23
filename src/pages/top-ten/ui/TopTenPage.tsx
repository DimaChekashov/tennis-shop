import { RacketType } from "@/shared/lib/types";
import React from "react";
import { RacketItem } from "@/shared/ui";

type TopTenPageType = {
  racketsData: RacketType[];
};

export const TopTenPage: React.FC<TopTenPageType> = ({ racketsData }) => {
  return (
    <div className="mt-6">
      <h1 className="text-heading text-4xl mb-8">ТОП-10 Ракеток</h1>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {racketsData.map((racket: RacketType) => (
          <RacketItem racket={racket} key={racket.id} />
        ))}
      </div>
    </div>
  );
};
