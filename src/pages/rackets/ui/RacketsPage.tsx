import { fetchRockets } from "@/shared/api/fetchRockets";
import { RacketType } from "@/shared/lib/types";
import { RadioButton } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

export const RacketsPage = async () => {
  const rackets = await fetchRockets().then((res) => res.json());

  return (
    <div className="mt-6 grid grid-cols-4 gap-10">
      <div>
        <div className="text-text text-lg mb-2">Бренд</div>
        <RadioButton id="brand-all" name="brand" value="all" label="All" />
        <RadioButton
          id="brand-wilson"
          name="brand"
          value="wilson"
          label="Wilson"
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-heading text-4xl mb-8">Ракетки</h1>
        <div className="grid grid-cols-4 gap-5">
          {rackets.map((racket: RacketType) => (
            <Link
              href={`/racket/${racket.id}`}
              key={`racket-id-${racket.id}`}
              className="group"
            >
              <div className="border border-border relative aspect-3/4 mb-4">
                <Image
                  src={racket.imageUrl}
                  alt={racket.name}
                  fill={true}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="text-heading text-lg transition group-hover:text-accent">
                {racket.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
