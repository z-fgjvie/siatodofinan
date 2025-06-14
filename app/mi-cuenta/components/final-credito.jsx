"use client";
import { useForm } from "react-hook-form";
import { FaFileContract, FaUniversity } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { useState } from "react";
import LoadingConfirma from "./loading-confirma";

export default function FinalCredito({ tipo }) {
  const [carga, setCarga] = useState(false);
  const [nextCard, setNextCard] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm();

  const handleNext = () => {
    if (!isValid) return;

    setCarga(true);

    setTimeout(() => {
      setCarga(false);
      setNextCard(true);
    }, 2000);
  };

  return (
    <section className="lg:p-5">
      {carga && <LoadingConfirma />}
      {!carga && !nextCard && (
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#09ce89]/10 p-2 rounded-full">
              <FaFileContract className="text-[#09ce89] text-xl" />
            </div>
            <h2 className="text-lg manrope-semibold text-gray-800">
              Firma de Contrato Digital
            </h2>
          </div>

          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Contrato digital de adhesión</li>
            <li>Resumen de términos del crédito</li>
          </ul>

          <a
            href="/contrato-adhesion-sitepresto.pdf"
            target="_blank"
            download
            className="text-sm bg-[#09ce89] text-white rounded-md px-4 py-2  flex items-center gap-2 justify-center manrope-medium text-center"
          >
            <AiOutlineDownload className="text-white text-2xl lg:text-3xl" />
            Descargar contrato de adhesión
          </a>

          <a
            href="/resumen-terminos-credito-sitepresto.pdf"
            download
            target="_blank"
            className="text-sm bg-[#09ce89] text-white rounded-md px-4 py-2  flex items-center gap-2 justify-center manrope-medium text-center"
          >
            <AiOutlineDownload className="text-white text-2xl lg:text-3xl" />
            Descargar resumen de crédito
          </a>

          <form onSubmit={handleSubmit(handleNext)}>
            <div className="pt-4">
              <label htmlFor="firma" className="text-sm text-gray-800">
                {tipo === "empresa"
                  ? "Firma del representante legal"
                  : "Firma con tu nombre completo"}
              </label>
              <input
                type="text"
                id="firma"
                name="firma"
                {...register("firma", {
                  required: true,
                })}
                placeholder="Nombre completo"
                className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black mt-1 text-sm p-1"
              />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`mt-7 w-full  text-white rounded-xl py-2  transition cursor-pointer 
              ${
                isValid ? "bg-[#09ce89]" : "bg-[#09ce89]/60 pointer-events-none"
              }`}
            >
              Continuar
            </button>
          </form>
        </div>
      )}

      {!carga && nextCard && (
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-5 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-[#09ce89]/10 p-2 rounded-full">
              <FaUniversity className="text-[#09ce89] text-xl" />
            </div>
            <h2 className="text-lg manrope-semibold text-gray-800">
              Liberación del Crédito
            </h2>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            El crédito se deposita en la cuenta registrada del solicitante en un
            lapso no mayor a{" "}
            <span className="font-semibold text-[#09ce89]">24 horas</span>.
          </p>
        </div>
      )}
    </section>
  );
}
