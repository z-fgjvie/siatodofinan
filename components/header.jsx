import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="px-5 py-5 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <h1>Logo</h1>
        </div>

        <div className="flex items-center gap-3 ">
          <Link
            href="/acceso/iniciar-sesion"
            className="bg-[#09ce89] text-white  manrope-medium  text-[0.9375rem]  px-5 py-2 rounded-lg "
          >
            Iniciar sesión
          </Link>
          <Link
            href="/acceso/registro"
            className="bg-[#09ce89] text-white manrope-medium text-[0.9375rem] px-5 py-2 rounded-lg"
          >
            Registro
          </Link>
        </div>
      </div>
    </header>
  );
}
