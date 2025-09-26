import RacketPage from "@/pages/racket";
import { RacketLoading } from "@/pages/racket/ui/RacketLoading";
import { fetchRacketById } from "@/shared/api/rackets";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const { data, isError } = await fetchRacketById(id);

  if (isError || data === undefined) return {};

  return {
    title: `Tennis Shop - ${data.name}`,
    description: data.description,
  };
}

export default async function Racket({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<RacketLoading />}>
      <RacketPage racketId={id} />
    </Suspense>
  );
}
