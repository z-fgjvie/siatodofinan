"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";

export default function HeaderCuenta() {
  const [letra, setLetraUsuario] = useState("");
  const router = useRouter();

  useEffect(() => {
    const obtenerLetraCliente = async () => {
      try {
        const token = localStorage.getItem("token"); // 👈 obtienes el token
        if (!token) return;
        const respuesta = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/user`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // 👈 lo mandas en los headers
              "Content-Type": "application/json",
            },
          }
        );

        const json = await respuesta.json();

        if (respuesta.ok) {
          const letraUsuario =
            json.data.nombreCompleto || json.data.representante || "Usuario";
          setLetraUsuario(letraUsuario.charAt(0).toUpperCase());
        }
      } catch (error) {
        console.log(error);
      }
    };

    obtenerLetraCliente();
  }, []);

  const cerrarSesion = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/cerrar`,
        {
          method: "POST",
        }
      );

      await response.json();

      if (response.ok) {
        localStorage.removeItem("token"); // Borra el token local
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="px-5 py-4 md:pt-4 md:pb-0 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/logo-financiera-h.png"
            alt="logo si te presto"
            width="100"
            height="100"
            className="cursor-pointer w-[6.875rem]  md:w-[7.5rem] "
          />
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <button className="bg-[#09ce89] text-white block manrope-bold text-lg w-10 h-10 rounded-full">
            {letra}
          </button>
          <MdLogout
            className="text-[1.825rem] cursor-pointer text-[#24275b]"
            onClick={cerrarSesion}
          />
        </div>
      </div>
    </header>
  );
}
