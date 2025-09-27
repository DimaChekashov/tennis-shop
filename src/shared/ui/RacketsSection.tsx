"use client";

import Link from "next/link";
import { RacketType, Response } from "../lib/types";
import { RacketItem } from "./RacketItem";
import Image from "next/image";
import ArrowIcon from "@/shared/assets/images/icons/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface RacketsSectionProps {
  rackets: Response<RacketType[]>;
  title: string;
  routeHref: string;
}

export const RacketsSection = ({
  rackets,
  title,
  routeHref,
}: RacketsSectionProps) => {
  if (rackets.isError) return "error";

  if (rackets.data === undefined) return "no data";

  return (
    <>
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
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className="mb-15"
      >
        {rackets.data.map((racket: RacketType) => (
          <SwiperSlide key={racket.id}>
            <RacketItem racket={racket} isLargeHeading={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
