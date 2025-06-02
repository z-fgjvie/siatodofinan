import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export default function Diferencia() {
  return (
    <section className="px-5 py-16 ">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Lo que nos diferencia de otros"
          descripcion="Beneficios reales que te hacen avanzar, sin complicaciones ni sorpresas."
        />

        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-14 lg:gap-0">
          <div>
            <div className="bg-[#09ce89] flex justify-center  mx-auto w-[18.5rem] h-[18.5rem] md:w-[24rem] md:h-[24rem] lg:w-[25rem] lg:h-[25rem]  rounded-full overflow-hidden  relative">
              <Image
                src="/diferencia.png"
                alt="imagen de diferencia"
                width="390"
                height="390"
                className=" absolute top-7"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <FaCircleCheck className="text-[#09ce89] text-2xl" />
              <p>No pedimos avales complicados ni buro limpio.</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <FaCircleCheck className="text-[#09ce89] text-2xl" />
              <p>Atención rápida y sin filas.</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <FaCircleCheck className="text-[#09ce89] text-2xl" />
              <p>
                Garantía reembolsable. Tu dinero trabaja para ti mientras
                cumples tu crédito.
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <FaCircleCheck className="text-[#09ce89] text-2xl" />
              <p>Flexibilidad en plazos y montos.</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2 ">
              <FaCircleCheck className="text-[#09ce89] text-2xl" />
              <p>
                Estudio socioeconómico claro y transparente. Solo se cobra en
                caso necesario, con información clara desde el inicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
