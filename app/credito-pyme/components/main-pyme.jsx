import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { IoReceipt } from "react-icons/io5";
import { BiSolidPin } from "react-icons/bi";

export default function MainPyme() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-[75rem] mx-auto grid md:grid-cols-2 gap-4 lg:gap-8">
        <div className="bg-[#283b42] text-white px-5 pt-5 pb-10 rounded-md ">
          <div className="bg-[#37464d] w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
            <FaShieldAlt className="text-2xl text-[#09ce89]" />
          </div>
          <h2 className="text-[1.375rem] poppins-semibold text-center mb-4">
            ¿Quién respalda estos créditos?
          </h2>
          <p className="text-center">
            Este esquema está garantizado por Sí Te Presto y sociedades formadas
            por constructoras y desarrolladoras, asegurando respaldo real,
            acceso a capital y validación ágil.
          </p>
        </div>

        <div className="bg-[#283b42] text-white p-5 rounded-md">
          <div className="bg-[#37464d] w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
            <LuChartNoAxesColumnIncreasing className="text-2xl text-[#09ce89]" />
          </div>
          <h2 className="text-[1.375rem]  poppins-semibold text-center mb-4">
            Montos y tasas
          </h2>
          <div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Desde $1,000,000 hasta $200,000,000 MXN</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Plazos: 6 a 60 meses</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Tasa mensual: 1.5% a 3.0%, según perfil y riesgo</p>
            </div>
          </div>
        </div>

        <div className="bg-[#283b42] text-white p-5 rounded-md">
          <div className="bg-[#37464d] w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
            <IoBarChart className="text-2xl text-[#09ce89]" />
          </div>
          <h2 className="text-[1.375rem]  poppins-semibold text-center mb-4">
            ¿Quiénes pueden acceder?
          </h2>
          <div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>
                Empresas constituidas legalmente (S.A. de C.V., S. de R.L.,
                etc.)
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Antigüedad mínima de 12 meses</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Proyectos con flujo proyectado o contratos firmados</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Dueños con historial fiscal y bancario sano</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Personas físicas con actividad empresarial vigente</p>
            </div>
          </div>
        </div>

        <div className="bg-[#283b42] text-white p-5 rounded-md">
          <div className="bg-[#37464d] w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
            <IoReceipt className="text-2xl text-[#09ce89]" />
          </div>
          <h2 className="text-[1.375rem]  poppins-semibold text-center mb-4">
            Estudio Socioeconómico Empresarial
          </h2>
          <div className="mb-5">
            <h3 className="text-lg underline manrope-semibold mb-3">
              Incluye:
            </h3>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Análisis de liquidez, flujo de efectivo y deudas</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Evaluación fiscal y de contratos</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>Estimación de riesgo y viabilidad</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg underline manrope-semibold mb-3">Costo:</h3>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>De $1M a $50M MXN: $15,999 + IVA</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#09ce89]" />
              <p>De $50M a $200M MXN: $26,599 + IVA</p>
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] mt-7 gap-2">
            <BiSolidPin className="text-red-500 text-xl " />
            <p className="text-sm manrope-medium">
              No reembolsable. Garantiza un análisis justo, profesional y
              transparente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
