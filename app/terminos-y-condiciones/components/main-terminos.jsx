import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function MainTerminos() {
  return (
    <section className="px-5 py-7 md:py-12">
      <div className="max-w-[75rem] mx-auto">
        <Link
          href="/"
          className="flex items-center gap-1 md:gap-2 mb-7 md:mb-8 manrope-semibold text-[#09ce89] md:text-lg"
        >
          <FiArrowLeft className="text-xl md:text-2xl" />
          Inicio
        </Link>
        <ol className="list-decimal space-y-4 pl-5">
          <li>
            El solicitante autoriza a <strong>Sí Te Presto</strong> a realizar
            un estudio socioeconómico previo a la aprobación del crédito. En
            caso de no contar con historial crediticio o presentar historial
            negativo, dicho estudio será obligatorio y tendrá un costo de{" "}
            <strong>$1,200 pesos mexicanos</strong>, el cual deberá ser cubierto
            previamente y sin excepción antes de iniciar el proceso de análisis
            y evaluación.
          </li>
          <li>
            El pago del estudio socioeconómico no garantiza la aprobación del
            crédito, pero sí es un paso necesario para continuar con el proceso.
          </li>
          <li>
            Por motivos de seguridad, control y transparencia, la única persona
            autorizada para recibir depósitos o transferencias es la apoderada
            legal de la financiera,{" "}
            <strong>Samantha Yuniel Barrios Degante</strong>.
          </li>
          <li>
            Todos los pagos deberán realizarse a la siguiente cuenta bancaria
            oficial autorizada:
            <ul className="list-disc pl-5 mt-2">
              <li className="mb-1">
                <strong>Banco:</strong> Banamex
              </li>
              <li className="mb-1">
                <strong>Clave:</strong> 002540702027247851
              </li>
              <li>
                <strong>Titular:</strong> Samantha Yuniel Barrios Degante
              </li>
            </ul>
          </li>
          <li>
            Es responsabilidad del solicitante verificar los datos bancarios
            antes de realizar cualquier depósito o transferencia.{" "}
            <strong>Sí Te Presto</strong> no se hace responsable por pagos
            realizados a cuentas distintas.
          </li>
          <li>
            En caso de aprobarse el crédito, el depósito se realizará únicamente
            a una cuenta bancaria a nombre del titular de la solicitud.
          </li>
          <li>
            En ciertos casos, <strong>Sí Te Presto</strong> podrá solicitar el
            Reporte Especial de Buró de Crédito con Score, el cual deberá ser
            proporcionado en formato PDF con no más de 30 días de antigüedad.
          </li>
          <li>
            El solicitante deberá proporcionar su RFC y su Constancia de
            Situación Fiscal emitida por el SAT.
          </li>
          <li>
            El solicitante se obliga a dejar una garantía económica inicial
            (porcentaje de la línea de crédito aprobada) que será liberada al
            cumplir con el 100% del pago del crédito.
          </li>
          <li>
            El solicitante acepta recibir notificaciones por WhatsApp, SMS,
            correo electrónico o llamadas telefónicas.
          </li>
        </ol>

        <div className="border-t my-4 pt-4">
          <h2 className="text-lg font-semibold">Declaración de Conformidad</h2>
          <p>
            Declaro que he leído, entendido y aceptado los términos y
            condiciones aquí expresados, y me comprometo a cumplir con las
            obligaciones derivadas de mi solicitud de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
