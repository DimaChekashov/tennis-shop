import { RacketContainer } from "@/pages/racket/ui/RacketContainer";
import { fetchRacketById, fetchRacketMetaById } from "@/shared/api/rackets";
import { Metadata } from "next";
import { SWRConfig } from "swr";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const { data, isError } = await fetchRacketMetaById(id);

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

  const result = await fetchRacketById(id);

  return (
    <SWRConfig
      value={{
        fallback: {
          [`racket/${id}`]: result,
        },
        revalidateOnFocus: false,
      }}
    >
      <RacketContainer racketId={id} />
    </SWRConfig>
  );
}
