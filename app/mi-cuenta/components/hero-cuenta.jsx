import Image from "next/image";
import React from "react";

export default function HeroCuenta() {
  return (
    <section className="px-5 pt-9 pb-14 md:py-0 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex  justify-between items-center">
        <div>
          <p className="poppins-regular mb-3 text-[#09ce89]">Cuenta Personal</p>
          <h1 className="text-4xl manrope-semibold">Hola, Carlos</h1>
        </div>
        <Image
          src="/hero-cuenta.png"
          alt="hero"
          width="300"
          height="300"
          className="hidden md:flex"
        />
      </div>
    </section>
  );
}
