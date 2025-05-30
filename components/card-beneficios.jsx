import React from "react";

export default function CardBeneficios({ icono: Icon, texto, className = "" }) {
  return (
    <div
      className={`${className} bg-[#ebf5f6] px-5 py-4 rounded-md grid grid-cols-[auto_1fr] gap-3 items-center `}
    >
      <Icon className="text-[2.0625rem] text-[#09ce89]" />
      <p className="text-gray-700 manrope-medium ml-1">{texto}</p>
    </div>
  );
}
