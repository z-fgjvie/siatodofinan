"use client";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaChartBar,
  FaShieldAlt,
  FaTimesCircle,
  FaHourglassHalf,
  FaArrowRight,
} from "react-icons/fa";

import Link from "next/link";

export default function InfoConfirmacion() {
  const [folio, setFolio] = useState("");

  const generarFolio = () => {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = Math.floor(1000 + Math.random() * 9000);
    const letra1 = letras[Math.floor(Math.random() * letras.length)];
    const letra2 = letras[Math.floor(Math.random() * letras.length)];
    return `${letra1}${letra2}${numeros}`;
  };

  useEffect(() => {
    const nuevoFolio = generarFolio();
    setFolio(nuevoFolio);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8 md:py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full text-[#283b42] animate-fade-in">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl poppins-semibold text-[#09ce89] mb-2">
            ¡Gracias por tu confianza!
          </h1>
          <p className="text-lg manrope-medium">
            Iniciamos el análisis de tu solicitud.
          </p>
          <p className="mt-2 text-gray-600">
            Tu folio es:{" "}
            <span className="manrope-bold text-[#283b42]">#{folio}</span>
          </p>
        </div>

        <div className="grid gap-8">
          {/* Paso 2 */}
          <div className="border-l-4 border-[#09ce89] pl-4 py-2">
            <div className="grid grid-cols-[auto_1fr]  sm:items-center gap-2 mb-2">
              <FaChartBar className="text-xl text-[#09ce89] mt-1 sm:mt-0" />
              <h2 className="text-xl manrope-semibold">
                Inicio del Análisis de Perfil
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Información financiera</li>
              <li>Documentos fiscales o legales</li>
              <li>Historial crediticio</li>
              <li>Capacidad de ingresos o flujo de negocio</li>
            </ul>
            <div className="flex items-center text-sm text-gray-500 mt-3">
              <FaHourglassHalf className="mr-2 text-yellow-500" />
              Tiempo estimado:{" "}
              <strong className="ml-1">48 a 72 horas hábiles</strong>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="border-l-4 border-[#09ce89] pl-4 py-2">
            <div className="grid grid-cols-[auto_1fr] sm:items-center gap-2 mb-2">
              <FaShieldAlt className="text-xl text-[#09ce89] mt-1 sm:mt-0" />
              <h2 className="text-xl manrope-semibold">
                Valoración de Riesgo y Monto Preaprobado
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              Se genera un dictamen interno basado en la matriz de riesgo. El
              resultado puede ser:
            </p>
            <ul className="space-y-2 ml-4 text-gray-700">
              <li className="grid grid-cols-[auto_1fr] sm:items-center gap-2">
                <FaCheckCircle className="text-green-500 mt-1 sm:mt-0" />{" "}
                Califica sin garantía
              </li>
              <li className="grid grid-cols-[auto_1fr] sm:items-center gap-2">
                <FaShieldAlt className="text-blue-500 mt-1 sm:mt-0" /> Califica
                con garantía económica (30%–50%)
              </li>
              <li className="grid grid-cols-[auto_1fr] sm:items-center gap-2">
                <FaTimesCircle className="text-red-500 mt-1 sm:mt-0" /> No
                califica por riesgo alto
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-6">
            El resultado estará disponible en tu cuenta registrada. Te
            recomendamos estar pendiente.
          </p>

          <Link
            href="/mi-cuenta/empresa"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#09ce89] text-white rounded-full text-sm font-semibold shadow-md hover:bg-[#07b87a] transition"
          >
            Ir a mi cuenta <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
