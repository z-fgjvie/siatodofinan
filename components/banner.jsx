import React from "react";
import CarouselImagenes from "./carousel-imagenes";

export default function Banner() {
  return (
    <section className="px-5 py-14 md:py-16 bg-[#10242d]">
      <div className="max-w-[60rem] mx-auto">
        <h2 className="text-white mb-14 md:mb-18 text-[2.0625rem] md:text-[2.375rem] text-center poppins-semibold">
          Los medios hablan de nosotros
        </h2>

        <CarouselImagenes />
      </div>
    </section>
  );
}
