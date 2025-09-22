import { RadioButton } from "@/shared/ui";
import React from "react";
import { BRANDS_ALL } from "@/shared/lib/consts";

type RacketsFilterType = {
  brands: string[];
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
};

export const RacketsFilter: React.FC<RacketsFilterType> = ({
  brands,
  selectedBrand,
  setSelectedBrand,
}) => {
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <>
      <RadioButton
        id="brand-all"
        name="brand"
        value="All"
        label="All"
        checked={selectedBrand === BRANDS_ALL}
        onChange={handleBrandChange}
      />
      {brands.map((brand, brandIdx) => (
        <RadioButton
          key={brandIdx}
          id={`brand-${brandIdx}`}
          name="brand"
          value={brand}
          label={brand}
          checked={selectedBrand === brand}
          onChange={handleBrandChange}
        />
      ))}
    </>
  );
};
