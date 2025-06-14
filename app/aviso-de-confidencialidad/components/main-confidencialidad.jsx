import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaEnvelope, FaGlobe } from "react-icons/fa";
import Link from "next/link";

export default function MainConfidencialidad() {
  return (
    <section className="max-w-[75rem] mx-auto px-4 py-10 text-gray-800 space-y-6">
      <Link
        href="/"
        className="flex items-center gap-1 md:gap-2 mb-7 md:mb-8 manrope-semibold text-[#09ce89] md:text-lg"
      >
        <FiArrowLeft className="text-xl md:text-2xl" />
        Inicio
      </Link>
      <p>
        Este mensaje, así como cualquier archivo adjunto, es estrictamente
        confidencial y está dirigido exclusivamente al destinatario. Si usted ha
        recibido esta información por error, le solicitamos notificarlo de
        inmediato al remitente y eliminarlo de su sistema sin conservar copia
        alguna.
      </p>

      <p>
        <strong className="text-[#09ce89]">SÍ TE PRESTO</strong>, representada
        legalmente por Samantha Yuniel Barrios Degante, informa que toda la
        información, documentación, datos financieros, patrimoniales, personales
        o empresariales que se generen, transmitan o compartan en el marco de la
        relación con el usuario o cliente, serán considerados como
        confidenciales.
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          1. Alcance del Compromiso de Confidencialidad
        </h2>
        <p className="mb-2">Toda la información intercambiada con motivo de:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Procesos de análisis crediticio</li>
          <li>Entrevistas personales</li>
          <li>Evaluaciones socioeconómicas</li>
          <li>Documentación de garantías o fondos</li>
          <li>Comunicación digital o verbal</li>
        </ul>
        <p className="mt-2">
          será tratada como confidencial, protegida conforme a la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares y demás
          disposiciones aplicables.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">
          2. Uso y Protección de la Información
        </h2>
        <p className="mb-2">
          La información proporcionada no será divulgada a terceros sin
          autorización expresa del titular, salvo que exista obligación legal.
          “Sí Te Presto” se compromete a:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Utilizar dicha información exclusivamente para el análisis,
            aprobación y gestión del crédito.
          </li>
          <li>
            Protegerla mediante medios técnicos, administrativos y legales
            adecuados.
          </li>
          <li>
            No utilizarla para fines distintos a los establecidos, sin
            consentimiento previo.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">3. Excepciones</h2>
        <p className="mb-2">
          La información podrá ser revelada únicamente en los siguientes casos:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cuando lo solicite una autoridad legal o judicial competente.</li>
          <li>
            Si es necesaria para la defensa legal de “Sí Te Presto” ante un
            incumplimiento contractual.
          </li>
          <li>
            Si se comparte con proveedores autorizados bajo contrato de
            confidencialidad, para tareas de análisis o gestión operativa.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">4. Vigencia</h2>
        <p>
          El compromiso de confidencialidad permanece vigente aún después de que
          concluya la relación contractual, comercial o crediticia entre el
          usuario y “Sí Te Presto”.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">5. Contacto</h2>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-[#09ce89]" />
          <span>legal@sietepresto.mx</span>
        </p>
        <p className="flex items-center gap-2">
          <FaGlobe className="text-[#09ce89]" />
          <span>www.sietepresto.mx</span>
        </p>
      </div>
    </section>
  );
}
