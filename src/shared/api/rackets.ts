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

  const data: RacketType[] = await response.json();

  return {
    isError: false,
    data,
  };
};

export const fetchRacketById = async (
  id: string
): Promise<Response<RacketType>> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/product/${id}`
  );

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const data: { product: RacketType } = await response.json();

  return {
    isError: false,
    data: data.product,
  };
};

export const fetchRacketMetaById = async (
  id: string
): Promise<Response<RacketType>> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RACKET_API}/meta/product/${id}`
  );

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const data: { product: RacketType } = await response.json();

  return {
    isError: false,
    data: data.product,
  };
};

export const fetchTopTenRackets = async (): Promise<Response<RacketType[]>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_RACKET_API}/top-10`, {
    next: { revalidate: 5, tags: ["fetchTopTenRackets"] },
  });

  if (!response.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const data: RacketType[] = await response.json();

  return {
    isError: false,
    data,
  };
};
