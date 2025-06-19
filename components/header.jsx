"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();

  return (
    <header className="px-5 py-4  bg-[#ebf5f6] sm:sticky top-0 z-20">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930497/logo-financiera-h_xsxg1a.png"
            alt="logo si te presto"
            width="120"
            height="120"
            onClick={() => router.push("/")}
            className="cursor-pointer w-[6.875rem]  md:w-[7.5rem] "
          />
        </div>

        <div className="flex items-center gap-3 ">
          <Link
            href="/acceso/iniciar-sesion"
            className="bg-[#09ce89] text-white  manrope-medium  text-[0.9375rem]  px-5 py-2 rounded-lg "
          >
            Iniciar sesión
          </Link>
          <Link
            href="/acceso/registro/personal"
            className="bg-[#09ce89] text-white manrope-medium text-[0.9375rem] px-5 py-2 rounded-lg hidden sm:flex"
          >
            Registro
          </Link>
        </div>
      </div>
    </header>
  );
}
