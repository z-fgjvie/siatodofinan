"use client";
import { formatearDinero } from "@/lib/formatearDinero";
import { getUser } from "@/lib/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SaldoPrestamos() {
  const [credito, setCredito] = useState(0);

  useEffect(() => {
    const cargarCredito = async () => {
      const user = await getUser();
      if (user && user.saldoPrestamo) setCredito(user.saldoPrestamo);
    };
    cargarCredito();
  }, []);

  return (
    <div className="mb-7">
      <h2 className="text-2xl md:text-3xl  poppins-semibold text-[#09ce89] mb-3 lg:mb-5">
        Crédito Disponible
      </h2>

      <div className="shadow-s px-4 py-7 gap-6 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/icon-financiera.png" alt="logo" width="30" height="30" />
          <p className="uppercase manrope-semibold text-gray-700 truncate md:overflow-visible md:text-ellipsis md:whitespace-normal">
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
    </div>
  );
}
