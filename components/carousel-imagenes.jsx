"use client";
import { bannerImage } from "@/data/bannerImages";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselImagenes() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 1500, stopOnInteraction: false })]}
    >
      <CarouselContent>
        {bannerImage.map((imagen) => (
          <CarouselItem
            key={imagen.id}
            className="basis-1/3 flex items-center justify-center"
          >
            <Image
              src={imagen.imagen}
              alt="logo"
              width="100"
              height="100"
              className="w-[8rem]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
