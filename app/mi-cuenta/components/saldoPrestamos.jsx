"use client";
import { dataGarantias } from "@/app/api/dataGarantias";
import { formatearDinero } from "@/lib/formatearDinero";
import { getUser } from "@/lib/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SaldoPrestamos() {
  const [credito, setCredito] = useState(0);
  const [estadoGarantia, setEstadoGarantia] = useState("");
  const { result, loading } = dataGarantias();

  useEffect(() => {
    if (loading) return;

    const cargarCredito = async () => {
      const user = await getUser();

      const garantiaAprobada = result?.find(
        (g) => g.estado === "aprobado" && g.usuarioId === user.id
      );

      if (user && garantiaAprobada) {
        setCredito(user.saldoPrestamo);
        setEstadoGarantia("aprobado");
      } else {
        setEstadoGarantia("desconocido");
      }
    };
    cargarCredito();
  }, [result, loading]);

  console.log(credito);

  return (
    <div className="mb-7">
      <h2 className="text-2xl md:text-3xl  poppins-semibold text-[#09ce89] mb-3 lg:mb-5">
        Crédito Disponible
      </h2>
      {estadoGarantia === "aprobado" ? (
        <div className="shadow-s px-4 py-7 gap-6 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930495/icon-financiera_pqpbmr.png"
              alt="logo"
              width="30"
              height="30"
            />
            <p className="uppercase manrope-semibold text-gray-700">
              Saldo de crédito
            </p>
          </div>
          <div>
            <p className="manrope-medium text-gray-800 mb-1 sm:mb-2">
              {formatearDinero(credito)}
            </p>
            <p className="text-gray-700 text-[0.6875rem] sm:text-sm">
              Crédito disponible
            </p>
          </div>
        </div>
      ) : (
        <div className="shadow-s px-4 py-7 gap-6 rounded-md flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930495/icon-financiera_pqpbmr.png"
              alt="logo"
              width="30"
              height="30"
            />
            <p className="uppercase manrope-semibold text-gray-700">
              Saldo de crédito
            </p>
          </div>
          <div>
            <p className="manrope-medium text-gray-800 mb-1 sm:mb-2">
              {formatearDinero(credito)}
            </p>
            <p className="text-gray-700 text-[0.6875rem] sm:text-sm">
              Crédito disponible
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
