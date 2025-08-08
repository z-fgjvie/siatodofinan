"use client";
import { getUser } from "@/lib/getUser";
import React, { useEffect, useState } from "react";
import { AiFillFileExclamation } from "react-icons/ai";

import { BsShieldLockFill } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import ModalDeposito from "./modal-deposito";

export default function ContenidoSocio() {
  const [nombre, setNombre] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const mostrarNombre = async () => {
      const user = await getUser();
      setNombre(user.nombreCompleto.split(" ")[0]);
    };

    mostrarNombre();
  }, []);

  return (
    <>
      <section className="px-4 py-10 mb-12">
        <div className="max-w-[75rem] mx-auto space-y-6 sm:space-y-10">
          {/* Mensaje de rechazo */}
          <div className="bg-white shadow-md rounded-xl px-6 py-8 ">
            <div className="grid grid-cols-[auto_1fr] gap-3 mb-4">
              <AiFillFileExclamation className="text-3xl text-red-500 mt-1 sm:mt-0" />
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Lo sentimos, {nombre}
              </h1>
            </div>

            <div className="grid grid-cols-[auto_1fr] lg:items-center mb-4">
              <p className="text-gray-700 text-sm">
                Tu situación financiera actual no permite otorgarte un crédito
                tradicional sin respaldo.
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 lg:items-center">
              <BsBookmarkCheckFill className="text-[#09ce89] text-lg mt-1 lg:mt-0" />

              <p className="text-gray-700 leading-relaxed">
                En <strong className="text-[#09ce89]">Sí Te Presto</strong>{" "}
                creemos en segundas oportunidades. Por eso, te invitamos a
                continuar con la modalidad de{" "}
                <strong className="text-[#09ce89]">crédito con garantía</strong>
                .
              </p>
            </div>
          </div>

          {/* Información del crédito con garantía */}
          <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center flex-wrap gap-3">
              <div className="bg-[#ebf5f6] w-12 h-12 rounded-full flex items-center justify-center">
                <BsShieldLockFill className="text-[#09ce89] text-2xl" />
              </div>
              ¿Cómo funciona el crédito con garantía?
            </h2>

            <div className="grid grid-cols-[auto_1fr] gap-4">
              <HiOutlineDocumentText className="text-[#09ce89] text-2xl mt-1" />
              <div>
                <p className="text-lg manrope-medium text-gray-900 mb-1">
                  Estudio Socioeconómico
                </p>
                <p className=" text-gray-700">
                  Costo único: <strong>$1,200 MXN</strong>
                </p>
                <p className=" text-gray-700">
                  Es indispensable para continuar el proceso y evaluar tu
                  situación real.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-4">
              <MdOutlineAttachMoney className="text-[#09ce89] text-2xl mt-1" />
              <div>
                <p className="text-lg manrope-medium text-gray-900 mb-1">
                  Capacidad de pago (si aplica)
                </p>
                <p className=" text-gray-700 mb-1">
                  Se te podrá solicitar demostrar tu compromiso depositando
                  entre el <strong>un porcentaje</strong> del monto solicitado.
                </p>
                <p className=" text-gray-700">
                  Este dinero se reflejará en tu cuenta de inversión,{" "}
                  <strong>genera rendimiento</strong> y te será devuelto al
                  finalizar el crédito, si cumples en tiempo y forma.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#09ce89] hover:bg-[#08b67a] text-white manrope-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-300 cursor-pointer md:w-fit w-full"
              >
                Depositar estudio socioeconómico
              </button>
            </div>
          </div>
        </div>
      </section>

      <ModalDeposito openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
