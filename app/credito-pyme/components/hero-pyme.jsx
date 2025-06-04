import Image from "next/image";
import React from "react";

export default function HeroPyme() {
  return (
    <section className="px-5 py-10 md:py-16 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[#09ce89] text-center md:text-left text-4xl md:text-[42px] leading-12 lg:leading-none lg:text-5xl poppins-semibold mb-6">
            Créditos PyME
          </h1>
          <p className="mb-6 md:text-lg">
            Financiamiento empresarial de alto impacto, respaldado por Sí Te
            Presto y un consorcio de constructoras.
          </p>
          <p className="md:text-lg bg-[#09ce89] px-5 py-4 rounded-md text-[#161b1d]">
            Lleva tu empresa al siguiente nivel con montos desde $1 millón hasta
            $200 millones de pesos, condiciones preferenciales y respaldo
            institucional.
          </p>
        </div>
        <Image
          src="/pyme-imagen.webp"
          alt="hero pyme"
          width="500"
          height="500"
          className="mx-auto rounded-md w-full md:w-auto"
        />
      </div>
    </section>
  );
}
