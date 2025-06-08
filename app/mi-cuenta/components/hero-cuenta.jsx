"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HeroCuenta({ tipo }) {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    const obtenerDatosCliente = async () => {
      try {
        const token = localStorage.getItem("token");
        const respuesta = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/user`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // 👈 lo pasas por header
              "Content-Type": "application/json",
            },
          }
        );

        const json = await respuesta.json();
        console.log(json);
        if (respuesta.ok) {
          const nombreUsuario =
            json.data.nombreCompleto || json.data.representante || "Usuario";
          setNombre(nombreUsuario.split(" ")[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerDatosCliente();
  }, []);

  return (
    <section className="px-5 pt-9 pb-14 md:py-0 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex  justify-between items-center">
        <div>
          <p className="poppins-regular mb-3 text-[#09ce89]">{tipo}</p>
          <h1 className="text-4xl manrope-semibold">Hola, {nombre}</h1>
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
