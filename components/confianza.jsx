import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { BsInfoLg } from "react-icons/bs";

import CardConfianza from "./card-confianza";

export default function Confianza() {
  return (
    <section className="px-5 py-16 bg-[#10242d]">
      <div className="max-w-[75rem] mx-auto">
        <div className="mb-10">
          <h2 className="text-white text-4xl md:text-[2.375rem] text-center poppins-semibold mb-2">
            ¿Por qué confiar en Sí Te Presto?
          </h2>
          <p className="text-center text-gray-300">
            Soluciones claras, respaldo confiable y compromiso real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <CardConfianza
            icono={FiRefreshCcw}
            titulo="Oportunidad"
            descripcion=" Porque entendemos que todos merecen una segunda oportunidad financiera."
          />
          <CardConfianza
            icono={LuHeartHandshake}
            titulo="Cercanía"
            descripcion="Porque nuestra prioridad es ayudarte, no complicarte."
          />
          <CardConfianza
            icono={FaRegEye}
            titulo="Transparencia"
            descripcion="Porque somos claros, sin letras chiquitas ni trampas."
          />
          <CardConfianza
            icono={FiZap}
            titulo="Eficiencia"
            descripcion="Porque optimizamos cada paso para resultados inmediatos."
          />
          <CardConfianza
            icono={LuShieldCheck}
            titulo="Seguridad"
            descripcion="Porque protegemos tus inversiones con tecnología avanzada y altos estándares."
          />

          <div className="bg-[#09ce89] p-5 rounded-md">
            <div className="bg-white rounded-full mb-3 w-12 h-12 flex items-center justify-center">
              <BsInfoLg className="text-[#09ce89] text-2xl" />
            </div>
            <h3 className="text-white text-2xl poppins-semibold">
              Importante saber
            </h3>
            <hr className="text-white my-3" />
            <p className="text-white">
              En algunos casos, será necesario cubrir una cuota única de{" "}
              <span className="manrope-semibold">$1,200 MXN</span> por estudio
              socioeconómico. Esto nos ayuda a ofrecerte un crédito justo y sin
              riesgos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
