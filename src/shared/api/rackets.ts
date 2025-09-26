import { RacketType, Response } from "../lib/types";

export const fetchRackets = async ({
  page = 1,
  limit = 2,
}: {
  page?: number;
  limit?: number;
} = {}): Promise<Response<RacketType[]>> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/products?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const rackets: RacketType[] = await response.json();

  return {
    isError: false,
    data: rackets,
  };
};

export const fetchRacketById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/product/${id}`
  );

  const racket: { product: RacketType } = await res.json();

  return racket.product;
};

export const fetchTopTenRackets = async (): Promise<Response<RacketType[]>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RACKET_API}/top-10`);

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const rackets: RacketType[] = await response.json();

  return {
    isError: false,
    data: rackets,
  };
};
