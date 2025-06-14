"use client";
import Image from "next/image";
import { BiInfoCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

export default function FinalTransferencia() {
  return (
    <div className="mb-5 md:mt-10 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 text-center space-y-5">
      {/* Imagen */}
      <Image
        src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930503/transfe_iqya9g.png"
        alt="Transferencia en curso"
        width={180}
        height={180}
        className="mx-auto"
      />

      {/* Título con ícono */}
      <div className="flex items-center justify-center gap-2 flex-wrap text-[#09ce89]">
        <FaCheckCircle className="text-2xl" />
        <h2 className="text-2xl font-bold text-gray-800">
          Transferencia en curso
        </h2>
      </div>

      {/* Mensaje informativo */}
      <p className="grid grid-cols-[auto_1fr]  gap-1 text-xs text-gray-600 max-w-md mx-auto">
        <BiInfoCircle className="mt-[2px] text-lg text-[#09ce89]" />
        La transferencia depende muchas veces de tu banco emisor en lo que
        procesa la solicitud.
      </p>
    </div>
  );
}
