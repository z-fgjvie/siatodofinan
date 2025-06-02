import Link from "next/link";
import React from "react";

export default function CardModalidad({ icono: Icon, credito, btn, ruta }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#37464d] rounded-full mb-4 w-20 h-20 flex items-center justify-center">
        <Icon className="text-[#09ce89] text-5xl" />
      </div>
      <h3 className="text-white poppins-semibold text-2xl mb-4">{credito}</h3>
      <Link
        href={ruta}
        className="bg-[#09ce89] text-white w-fit  flex items-center px-5 py-3 rounded-lg gap-2 mx-auto md:mx-0"
      >
        {btn}
      </Link>
    </div>
  );
}
