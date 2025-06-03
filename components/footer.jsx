import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-5 py-10 bg-[#10242d] text-white">
      <div className="max-w-[75rem] mx-auto flex gap-6 sm:gap-12 sm:items-center  sm:flex-row flex-col">
        <Image src="/icon-financiera.png" alt="logo" width="50" height="50" />
        <p className="text-gray-300 text-[1.0625rem] text-center sm:text-left">
          Copyright ©2020 Sí Te Presto.
        </p>
      </div>
    </footer>
  );
}
