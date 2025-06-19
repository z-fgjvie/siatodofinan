"use client";
import { formatearDinero } from "@/lib/formatearDinero";
import { getUser } from "@/lib/getUser";
import { useEffect, useState } from "react";
import { FaHandHoldingUsd, FaUniversity, FaUpload } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import ModalConfirmacion from "./modal-confirmacion";
import { FaCheckCircle } from "react-icons/fa";
import FinalCredito from "./final-credito";

export default function CardMontoGarantia({ monto, tipo }) {
  const [montoCredito, setMontoCredito] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [exito, setExito] = useState(false);

  useEffect(() => {
    const mostrarMontoCredito = async () => {
      if (typeof window === "undefined") return;

      const token = localStorage.getItem("token");
      if (!token) return;

      const user = await getUser();
      setMontoCredito(user.saldoPrestamo);
    };

    mostrarMontoCredito();
  }, []);

  return (
    <>
      {!exito ? (
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl mx-auto border border-gray-200 mt-6">
          <div className="mb-4 mt-1 grid grid-cols-[auto_1fr] gap-2">
            <FaCheckCircle className="text-[#09ce89] text-[1.625rem] lg:mt-1 mb-2" />

            <h2 className="text-2xl manrope-semibold text-[#283b42] ">
              Tu crédito ha sido preaprobado bajo modalidad de garantía.
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Consulta los siguientes pasos para continuar con tu solicitud.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <MdAttachMoney className="text-[#09ce89] text-2xl" />
              <div>
                <p className="text-sm text-gray-500">Monto total del crédito</p>
                <p className="text-lg font-bold text-[#283b42]">
                  {formatearDinero(montoCredito)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FaHandHoldingUsd className="text-[#09ce89] text-2xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Monto a depositar como garantía
                </p>
                <p className="text-lg font-bold text-[#283b42]">
                  {formatearDinero(monto)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border">
              <FaUniversity className="text-[#09ce89] text-2xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Cuenta bancaria para el depósito
                </p>
                <p className="text-lg font-bold text-[#283b42]">
                  BANAMEX - 002540702027247851
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={() => setOpenModal(true)}
              className="w-full flex items-center gap-3 justify-center text-center bg-[#09ce89] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#07b277] transition-all"
            >
              <FaUpload className="text-lg" />
              Depositar saldo en garantia
            </button>
          </div>
        </div>
      ) : (
        <FinalCredito tipo={tipo} />
      )}

      <ModalConfirmacion
        setOpenModal={setOpenModal}
        openModal={openModal}
        onExito={() => setExito(true)}
      />
    </>
  );
}
