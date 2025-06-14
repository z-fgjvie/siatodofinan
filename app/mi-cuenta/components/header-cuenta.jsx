"use client";
import { getUser } from "@/lib/getUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";

export default function HeaderCuenta() {
  const [letra, setLetraUsuario] = useState("");
  const router = useRouter();

  useEffect(() => {
    const cargarLetra = async () => {
      const user = await getUser();
      if (user) {
        const nombre = user.nombreCompleto || user.nombreEmpresa || "Usuario";
        setLetraUsuario(nombre.charAt(0).toUpperCase());
      }
    };
    cargarLetra();
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
    <header className="px-5 py-4  bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930497/logo-financiera-h_xsxg1a.png"
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
