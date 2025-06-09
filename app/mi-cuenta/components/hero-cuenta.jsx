"use client";
import { getUser } from "@/lib/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroCuenta({ tipo, bienvenida }) {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const user = await getUser();
      if (user.nombreEmpresa) {
        setNombre(user.nombreEmpresa);
      } else if (user.nombreCompleto) {
        setNombre(user.nombreCompleto.split(" ")[0]);
      } else {
        setNombre("Usuario");
      }
    };
    cargarDatos();
  }, []);

  return (
    <section className="px-5 pt-9 pb-14 md:py-0 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex  justify-between items-center">
        <div>
          <p className="poppins-regular mb-3 text-[#09ce89]">{tipo}</p>
          <h1 className="text-4xl manrope-semibold mb-4">Hola, {nombre}</h1>
          <p className="sm:max-w-[63%] md:max-w-[80%] lg:max-w-[60%]">
            {bienvenida}
          </p>
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
