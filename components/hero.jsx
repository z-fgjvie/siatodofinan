import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="px-5 pt-10 pb-16 bg-[#ebf5f6] ">
      <div className="max-w-[75rem] mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <h1 className="text-[#051517] text-center md:text-left text-4xl md:text-[42px] leading-12 lg:leading-none lg:text-5xl poppins-semibold mb-6">
            Accede hasta <span className="text-[#09ce89]">$200 Millones </span>
            en Crédito Empresarial
          </h1>
          <p className="mb-8 lg:text-lg text-center md:text-left">
            Financia tus proyectos con rapidez, sin papeleos complicados y con
            tecnología que entiende tu negocio.
          </p>
        </div>
        <Image
          src="/medal.png"
          alt="imagen de una medalla"
          width="42"
          height="42"
          className="absolute top-45 left-74 hidden lg:flex"
        />
        <Image
          src="/imagen-hero.jpg"
          alt="imagen hero"
          width="500"
          height="500"
          className="ml-auto rounded-md w-full hidden md:flex"
        />
      </div>
    </section>
  );
}
