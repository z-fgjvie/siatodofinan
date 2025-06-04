import React from "react";
import { ImUserTie } from "react-icons/im";
import CardModalidad from "./card-modalidad";
import { FaBuilding } from "react-icons/fa";

export default function ModalidadPrestamo() {
  return (
    <section className="px-5 py-14 md:py-16 bg-[#10242d]">
      <div className="max-w-[60rem] mx-auto">
        <h2 className="text-white mb-14 md:mb-18 text-[2.0625rem] md:text-[2.375rem] text-center poppins-semibold">
          Modalidades de Préstamos
        </h2>

        <div className="grid sm:grid-cols-2 gap-16 sm:gap-3">
          <CardModalidad
            icono={ImUserTie}
            credito="Crédito Personal"
            btn="Crédito Personal"
            ruta="#simulador"
          />
          <CardModalidad
            icono={FaBuilding}
            credito="Crédito PYME"
            btn="Crédito PYME"
            ruta="/credito-pyme"
          />
        </div>
      </div>
    </section>
  );
}
