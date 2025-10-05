"use client";

import { RacketType, Response } from "@/shared/lib/types";
import { notFound } from "next/navigation";
import { RacketPage } from "./RacketPage";
import useSWR from "swr";

const fetcher = async (path: string) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_RACKET_API}/${path}`, {
    credentials: "include",
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: RacketType } = await result.json();

  return { isError: false, data: data.product };
};

interface RacketContainerProps {
  racketId: string;
}

export const RacketContainer = ({ racketId }: RacketContainerProps) => {
  const { data, isLoading } = useSWR<Response<RacketType>>(
    `racket/${racketId}`,
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );

  const racket = data?.data;

  if (data?.isError) {
    return "some error";
  }

  if (isLoading) {
    return "isLoadingSWR...";
  }

  if (!racket) {
    return notFound();
  }

  return <RacketPage data={racket} />;
};
