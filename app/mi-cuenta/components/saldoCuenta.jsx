"use client";
import { formatearDinero } from "@/lib/formatearDinero";
import { getUser } from "@/lib/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SaldoCuenta() {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const cargarSaldo = async () => {
      const user = await getUser();
      if (user && user.cuentaAhorro) setSaldo(user.cuentaAhorro);
    };
    cargarSaldo();
  }, []);

  return (
    <div className="row-start-1 row-end-2 lg:col-start-2 lg:col-end-3">
      <h2 className="text-2xl md:text-3xl  poppins-semibold text-[#09ce89] mb-3 lg:mb-5">
        Mi Saldo
      </h2>

      <div className="shadow-s px-4 py-7 gap-6 rounded-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930495/icon-financiera_pqpbmr.png"
            alt="logo"
            width="30"
            height="30"
          />
          <p className="uppercase manrope-semibold text-gray-700 truncate md:overflow-visible md:text-ellipsis md:whitespace-normal">
            Cuenta de ahorro
          </p>
        </div>
        <div>
          <p className="manrope-medium text-gray-800 mb-1 sm:mb-2">
            {formatearDinero(saldo)}
          </p>
          <p className="text-gray-700 text-[0.6875rem] sm:text-sm">
            Saldo disponible
          </p>
        </div>
      </div>
    </div>
  );
}
