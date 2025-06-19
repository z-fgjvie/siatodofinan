import Link from "next/link";
import React from "react";

export default function IniciosEstaticos() {
  return (
    <div className="flex flex-wrap items-center gap-4 justify-center w-full bg-[#10242d]  py-5 sm:hidden sticky bottom-0">
      <Link
        href="/acceso/registro/personal"
        className="bg-[#09ce89] text-white  manrope-medium  text-[0.9375rem]  px-6 py-3 rounded-md  sm:hidden"
      >
        Registro Personal
      </Link>
      <Link
        href="/acceso/registro/empresa"
        className="bg-[#09ce89] text-white manrope-medium text-[0.9375rem] px-6 py-3 rounded-md sm:hidden "
      >
        Registro Moral
      </Link>
    </div>
  );
}
