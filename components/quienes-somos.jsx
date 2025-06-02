import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

export default function QuienesSomos() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Quiénes somos"
          subtitulo="Financiera comprometida con créditos justos, claros y accesibles para todos."
        />

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-3 items-center">
          <div>
            <Image
              src="/somos.png"
              alt="imagen quienes somos"
              width="400"
              height="400"
              className="mx-auto"
            />
          </div>
          <div>
            <p className="mb-3">
              En <strong className="text-[#09ce89]">Sí Te Presto</strong>, somos
              una financiera comprometida con las personas, no con el historial.
              Nacimos con un propósito claro: abrirle la puerta al crédito a
              quienes más lo necesitan, sin letras chiquitas ni procesos
              imposibles.
            </p>
            <p className="mb-7">
              Creemos en las segundas oportunidades, en hablar claro y en
              acompañarte con soluciones reales, sin filtros ni prejuicios.
              Nuestra experiencia nos ha enseñado que un trato justo, ágil y
              transparente puede marcar la diferencia en la vida de alguien, y
              por eso trabajamos cada día.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-[#ebf5f6] p-5 rounded-lg text-gray-700">
                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <TbTargetArrow className="text-2xl" />
                  <h3 className=" poppins-semibold text-xl mb-2">Misión:</h3>
                </div>
                <p>
                  Brindar acceso a productos financieros claros, justos y
                  accesibles, generando confianza a través de atención cercana,
                  transparencia total y procesos inclusivos.
                </p>
              </div>
              <div className="bg-[#ebf5f6] p-5 rounded-lg text-gray-700">
                <div className="grid grid-cols-[auto_1fr]  gap-3">
                  <FaEye className="text-2xl" />
                  <h3 className=" poppins-semibold text-xl mb-2">Visión:</h3>
                </div>
                <p>
                  Convertirnos en la financiera líder en oportunidades reales,
                  donde cada cliente encuentre no solo un préstamo, sino un
                  aliado para avanzar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
