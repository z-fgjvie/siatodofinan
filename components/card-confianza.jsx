import React from "react";

export default function CardConfianza({ icono: Icon, titulo, descripcion }) {
  return (
    <div className="bg-[#283b42] p-5 rounded-md">
      <div className="bg-[#37464d] rounded-full mb-3 w-12 h-12 flex items-center justify-center">
        <Icon className="text-[#09ce89] text-2xl" />
      </div>
      <h3 className="text-white text-2xl poppins-semibold">{titulo}</h3>
      <hr className="text-gray-600 my-3" />
      <p className="text-white">{descripcion}</p>
    </div>
  );
}
