import Link from "next/link";
import React from "react";

export default function IniciosEstaticos() {
  return (
    <div className="flex flex-wrap items-center gap-5 justify-center w-full bg-[#10242d]  py-5 sm:hidden sticky bottom-0">
      <Link
        href="/acceso/iniciar-sesion"
        className="bg-[#09ce89] text-white  manrope-medium  text-[0.9375rem]  px-6 py-3 rounded-md  sm:hidden"
      >
        Iniciar sesión
      </Link>
      <Link
        href="/acceso/registro/personal"
        className="bg-[#09ce89] text-white manrope-medium text-[0.9375rem] px-6 py-3 rounded-md sm:hidden "
      >
        Registro
      </Link>
    </div>
  );
}
