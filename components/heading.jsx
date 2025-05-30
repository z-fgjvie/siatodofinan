import React from "react";

export default function Heading({ titulo, descripcion, className = "" }) {
  return (
    <div className="mb-10">
      <h2 className="text-[#051517] text-4xl md:text-[2.375rem] text-center poppins-semibold mb-2">
        {titulo}
      </h2>
      <p className="text-center text-gray-500">{descripcion}</p>
    </div>
  );
}
