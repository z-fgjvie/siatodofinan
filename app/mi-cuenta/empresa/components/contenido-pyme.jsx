"use client";
import { getUser } from "@/lib/getUser";
import React, { useEffect, useState } from "react";
import { AiFillFileExclamation } from "react-icons/ai";
import { BsShieldLockFill, BsBookmarkCheckFill } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import ModalEmpresa from "./modal-empresa";

export default function ContenidoEmpresa() {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const mostrarNombreEmpresa = async () => {
      const user = await getUser();
      setNombreEmpresa(user.nombreEmpresa);
    };

    mostrarNombreEmpresa();
  }, []);

  return (
    <>
      <section className="px-4 py-10 mb-12">
        <div className="max-w-[75rem] mx-auto space-y-6 sm:space-y-10">
          {/* Mensaje de rechazo */}
          <div className="bg-white shadow-md rounded-xl px-6 py-8">
            <div className="grid grid-cols-[auto_1fr] gap-3 mb-4">
              <AiFillFileExclamation className="text-3xl text-red-500 mt-1 sm:mt-0" />
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Lo sentimos, {nombreEmpresa}
              </h1>
            </div>

            <div className="grid grid-cols-[auto_1fr] lg:items-center mb-4">
              <p className="text-gray-700 text-sm">
                Tu situación financiera no permite acceder a un crédito
                empresarial tradicional sin respaldo.
              </p>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-2 lg:items-center">
              <BsBookmarkCheckFill className="text-[#09ce89] text-lg mt-1 lg:mt-0" />
              <p className="text-gray-700 leading-relaxed">
                En <strong className="text-[#09ce89]">Sí Te Presto</strong>{" "}
                creemos en empresas con visión de crecimiento. Por eso, te
                invitamos a continuar con la modalidad de{" "}
                <strong className="text-[#09ce89]">
                  crédito garantizado PyME
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Información del crédito con garantía para empresas */}
          <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center flex-wrap gap-3">
              <div className="bg-[#ebf5f6] w-12 h-12 rounded-full flex items-center justify-center">
                <BsShieldLockFill className="text-[#09ce89] text-2xl" />
              </div>
              ¿Cómo funciona el crédito PyME con garantía?
            </h2>

            <div className="grid grid-cols-[auto_1fr] gap-4">
              <HiOutlineDocumentText className="text-[#09ce89] text-2xl mt-1" />
              <div>
                <p className="text-lg manrope-medium text-gray-900 mb-1">
                  Estudio Socioeconómico Empresarial
                </p>
                <p className="text-gray-700">
                  Análisis detallado del estado financiero, documentación legal
                  y flujo del negocio.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Costos:</strong>
                </p>
                <ul className="text-gray-700 list-disc list-inside">
                  <li>
                    De $1M a $50M MXN: <strong>$15,999 + IVA</strong>
                  </li>
                  <li>
                    De $50M a $200M MXN: <strong>$26,599 + IVA</strong>
                  </li>
                </ul>
                <p className="text-gray-700 mt-1">
                  Obligatorio y no reembolsable. Cubre el análisis
                  especializado.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-4">
              <MdOutlineAttachMoney className="text-[#09ce89] text-2xl mt-1" />
              <div>
                <p className="text-lg manrope-medium text-gray-900 mb-1">
                  Depósito de garantía (si aplica)
                </p>
                <p className="text-gray-700 mb-1">
                  Dependiendo del análisis de riesgo, se podría requerir
                  demostrar capacidad de pago con un depósito en garantía que
                  depe de del monto solicitado.
                </p>
                <p className="text-gray-700">
                  Este capital se deposita en una cuenta de inversión
                  empresarial, <strong>genera intereses</strong> y te será
                  devuelto al finalizar exitosamente el crédito.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#09ce89] hover:bg-[#08b67a] text-white manrope-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300 cursor-pointer md:w-fit w-full "
              >
                Depositar estudio socioeconómico
              </button>
            </div>
          </div>
        </div>
      </section>

      <ModalEmpresa openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
