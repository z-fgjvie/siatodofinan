import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-5 pt-10 pb-16 bg-[#10242d] text-white">
      <div className="max-w-[75rem] mx-auto flex justify-between items-center flex-col md:flex-row gap-5">
        <div className="flex gap-6 sm:gap-12 sm:items-center sm:flex-row flex-col mb-5 md:mb-0">
          <Image
            src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930495/icon-financiera_pqpbmr.png"
            alt="logo"
            width="50"
            height="50"
          />
          <p className="text-gray-300 text-[1.0625rem] text-center sm:text-left">
            Copyright ©2020 Sí Te Presto.
          </p>
        </div>

        <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>
        <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>
        <Link href="/aviso-de-confidencialidad">Aviso de Confidencialidad</Link>
      </div>
    </footer>
  );
}
