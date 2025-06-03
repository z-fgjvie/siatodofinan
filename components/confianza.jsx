import React from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { BsInfoLg } from "react-icons/bs";
import { BsShieldLockFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

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

        <div>
          <h3 className="text-white text-center underline underline-offset-2 text-[1.625rem]  mt-12 mb-6  lg:my-12 poppins-semibold ">
            Tu compromiso merece ser premiado
          </h3>

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-10">
            <div>
              <p className="text-white text-justify">
                En Sí Te Presto, entendemos que cada persona es diferente. Por
                eso, en algunos casos será necesario dejar una garantía o
                demostrar capacidad de pago, que puede ir del 30% hasta el 50%
                del monto solicitado, dependiendo del perfil y riesgo valorado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-[#283b42] p-5 rounded-md">
                <BsShieldLockFill className="text-[#09ce89] text-3xl mb-4" />
                <p className="text-white">
                  Esta garantía estará protegida y segura en tu cuenta de Sí Te
                  Presto, generando un rendimiento óptimo mientras mantengas tus
                  pagos puntuales.
                </p>
              </div>
              <div className="bg-[#283b42] p-5 rounded-md">
                <FaTrophy className="text-[#09ce89] text-3xl mb-4" />
                <p className="text-white">
                  Nosotros premiamos tu compromiso. Al finalizar el plazo,
                  recuperarás tu fondo más los intereses generados.
                </p>
              </div>
              <div className="bg-[#283b42] p-5 rounded-md">
                <IoChatbubbleEllipsesSharp className="text-[#09ce89] text-3xl mb-4" />
                <p className="text-white"> Si cumples, ganas. Así de claro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
