"use client";
import { FaUniversity, FaRegIdCard } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { IoIosLock } from "react-icons/io";
import LoadingConfirma from "./loading-confirma";
import { useState } from "react";
import FinalTransferencia from "./final-transferencia";

export default function Spei() {
  const [spei, setSpei] = useState("transferencia");
  const {
    register,
    formState: { isValid },
  } = useForm();

  const handleNext = () => {
    if (!isValid) return;
    setSpei("confirmar");

    setTimeout(() => {
      setSpei("finalizado");
    }, 3000);
  };

  return (
    <>
      {spei === "transferencia" ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 border  border-gray-100 text-left space-y-6">
          {/* Título */}
          <div className="flex items-center gap-2 text-xl font-semibold text-[#09ce89]">
            <FaUniversity />
            <span>Depósito del Crédito</span>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-2">
            <BiInfoCircle />
            <p className="text-gray-700 text-sm ">
              Transfiere tu crédito por{" "}
              <span className="manrope-medium text-[#09ce89] mx-1">SPEI</span> a
              tu Clabe Interbancaria.
            </p>
          </div>

          {/* Input Clabe */}
          <div>
            <label
              htmlFor="clabe"
              className="text-sm text-gray-800 font-medium flex items-center gap-1"
            >
              <FaRegIdCard className="text-[#09ce89]" />
              Clabe Interbancaria del titular
            </label>
            <input
              type="text"
              id="clabe"
              maxLength={18}
              {...register("clabe", {
                required: true,
                minLength: 18,
              })}
              placeholder="Ej. 002123456789012345"
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-[#09ce89] mt-1 text-sm p-2"
            />
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-2">
            <IoIosLock className="text-[#09ce89] text-base" />
            <p className="text-[0.8125rem] text-gray-600">
              Recuerda que la clabe interbancaria deberá coincidir con el
              titular del crédito solicitado.
            </p>
          </div>

          {/* Botón final */}
          <button
            className={`w-full mt-2 ${
              isValid ? "bg-[#09ce89] cursor-pointer" : "bg-[#09ce89]/50"
            } text-white py-3 rounded-lg manrope-medium `}
            onClick={handleNext}
            disabled={!isValid}
          >
            Iniciar transferencia SPEI
          </button>
        </div>
      ) : spei === "confirmar" ? (
        <LoadingConfirma />
      ) : (
        <FinalTransferencia />
      )}
    </>
  );
}
