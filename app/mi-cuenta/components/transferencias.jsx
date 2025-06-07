"use client";
import { dataTransferencias } from "@/app/api/dataTransferencias";
import { formatearDinero } from "@/lib/formatearDinero";
import React from "react";
import { TbRepeat } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Transferencias() {
  const { result, loading } = dataTransferencias();

  console.log(result);
  return (
    <div>
      <h2 className="text-2xl md:text-3xl  poppins-semibold text-[#09ce89] mb-3 lg:mb-7">
        Transferencias
      </h2>

      <div className="shadow-md p-5 rounded-md">
        {loading ? (
          <AiOutlineLoading3Quarters className="mx-auto text-[1.625rem] text-[#09ce89] animate-spin" />
        ) : (
          <>
            {result && result.length === 0 ? (
              <p className="text-center">No hay transferencias</p>
            ) : (
              <>
                {result !== null &&
                  result.map((transferencia) => (
                    <div
                      key={transferencia.id}
                      className="flex items-center justify-between mb-5"
                    >
                      <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                        <div className="bg-[#09ce89] flex items-center justify-center rounded-full w-9 h-9">
                          <TbRepeat className="text-white text-lg" />
                        </div>
                        <p className="text-gray-700">{transferencia.fecha}</p>
                      </div>

                      <p className="manrope-medium">
                        {formatearDinero(transferencia.monto)}
                      </p>
                    </div>
                  ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
