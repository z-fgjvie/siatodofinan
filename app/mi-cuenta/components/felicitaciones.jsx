"use client";
import { BsStars } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import LoadingConfirma from "./loading-confirma";
import { useState } from "react";
import Spei from "./spei";

export default function Felicitaciones() {
  const [estado, setEstado] = useState("felicitaciones");

  const handleClick = () => {
    setEstado("loading");

    setTimeout(() => {
      setEstado("deposito");
    }, 3000);
  };

  return (
    <>
      {estado === "felicitaciones" ? (
        <div className="mb-5 md:mt-10 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 text-center space-y-5">
          <Image
            src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930489/exito_sjrbgf.png"
            alt="imagen exito"
            width={190}
            height={190}
            className="mx-auto"
          />

          <div className="flex items-center justify-center gap-2 text-[#09ce89]">
            <FaRegCheckCircle className="text-3xl" />
            <h2 className="text-2xl font-bold text-gray-800">¡Felicidades!</h2>
          </div>

          <p className="text-gray-700 text-sm max-w-md mx-auto">
            Tu crédito ha sido{" "}
            <span className="font-semibold text-[#09ce89]">
              liberado con éxito
            </span>
            . Cumple a tiempo y accede a mejores beneficios con{" "}
            <span className="font-semibold text-[#09ce89]">Sí Te Presto</span>.
          </p>

          <div className="flex justify-center gap-4 text-[#09ce89] text-2xl ">
            <BsStars />
            <FaRegSmileBeam />
          </div>

          <button
            className="w-full bg-[#09ce89] py-3 text-white manrope-medium mt-2 text-center rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            Transfiere a tu cuenta bancaria
          </button>
        </div>
      ) : estado === "loading" ? (
        <LoadingConfirma />
      ) : (
        <Spei />
      )}
    </>
  );
}
