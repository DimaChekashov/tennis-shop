"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { RacketType, Response } from "../lib/types";
import { RacketItem } from "./RacketItem";
import Image from "next/image";
import ArrowIcon from "@/shared/assets/images/icons/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/navigation";

interface RacketsSectionProps {
  racketsPromise: Promise<Response<RacketType[]>>;
  title: string;
  routeHref: string;
}

export const RacketsSection = ({
  racketsPromise,
  title,
  routeHref,
}: RacketsSectionProps) => {
  const { isError, data } = use(racketsPromise);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isError) {
    throw new Error("error");
  }

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (data === undefined) return null;

  return (
    <div
      className={classNames(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl">{title}</h1>
        <Link
          href={routeHref}
          className="flex items-center gap-2 text-accent transition hover:opacity-70"
        >
          Все <Image src={ArrowIcon} alt="Иконка стрелки" />
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        className="mb-15"
        breakpoints={{
          9: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1536: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {data.map((racket) => (
          <SwiperSlide key={racket.id}>
            <RacketItem racket={racket} isLargeHeading={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
