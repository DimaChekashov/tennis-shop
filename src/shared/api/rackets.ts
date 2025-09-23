import { RacketType } from "../lib/types";

export const fetchAllRackets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RACKET_API}/products`);

  const rackets: RacketType[] = await res.json();

  return rackets;
};

export const fetchRacketById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/product/${id}`
  );

  const racket: { product: RacketType } = await res.json();

  return racket.product;
};
