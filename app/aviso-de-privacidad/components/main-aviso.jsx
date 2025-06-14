import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function MainAviso() {
  return (
    <section className="max-w-[75rem] mx-auto px-4 py-7 md:py-12 text-gray-800">
      <Link
        href="/"
        className="flex items-center gap-1 md:gap-2 mb-7 md:mb-8 manrope-semibold text-[#09ce89] md:text-lg"
      >
        <FiArrowLeft className="text-xl md:text-2xl" />
        Inicio
      </Link>
      <p className="mb-6">
        <strong className="text-[#09ce89]">SÍ TE PRESTO</strong>, marca
        comercial representada legalmente por Samantha Yuniel Barrios Degante,
        con domicilio para efectos del presente aviso en Ciudad de México, es
        responsable del tratamiento de sus datos personales conforme a lo
        dispuesto en la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Datos que recabamos</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Datos de identificación:</strong> nombre, CURP, RFC,
              firma, edad, sexo, domicilio, número telefónico, correo
              electrónico.
            </li>
            <li>
              <strong>Datos financieros y patrimoniales:</strong> ingresos,
              egresos, historial crediticio, cuentas bancarias, garantías,
              propiedades.
            </li>
            <li>
              <strong>Datos laborales:</strong> ocupación, lugar de trabajo,
              antigüedad, comprobantes de ingresos.
            </li>
            <li>
              <strong>Datos digitales:</strong> IP, tipo de dispositivo,
              comportamiento en la app o sitio web, geolocalización (si lo
              autoriza).
            </li>
            <li>
              En algunos casos, <strong>datos sensibles</strong> relacionados
              con salud financiera, situación familiar o social, siempre con
              consentimiento expreso.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. Finalidades del tratamiento
          </h2>
          <p className="mb-2 font-medium">Finalidades principales:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Verificar la identidad del solicitante.</li>
            <li>Evaluar y determinar la viabilidad de otorgar un crédito.</li>
            <li>
              Gestionar solicitudes, seguimiento y cumplimiento de obligaciones
              contractuales.
            </li>
            <li>
              Consultar historial crediticio en Buró de Crédito o Círculo de
              Crédito.
            </li>
            <li>
              Contacto vía telefónica, correo electrónico o mensajería digital.
            </li>
            <li>Cumplimiento de obligaciones legales.</li>
            <li>Prevención de fraudes.</li>
            <li>
              Generar perfiles financieros o de comportamiento con fines de
              evaluación y promoción de productos personalizados.
            </li>
          </ul>
          <p className="mt-4 mb-2 font-medium">Finalidades secundarias:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mercadotecnia o publicidad de nuevos productos financieros.</li>
            <li>Estudios estadísticos y de mercado.</li>
            <li>Mejora de servicios.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Transferencias de datos
          </h2>
          <p className="mb-2">Sus datos podrán ser compartidos con:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Autoridades financieras, administrativas, fiscales o judiciales
              cuando así lo requiera la ley.
            </li>
            <li>Buró de Crédito y Círculo de Crédito.</li>
            <li>
              Proveedores externos relacionados con la gestión del crédito,
              verificación de identidad, tecnologías de información, estudios
              socioeconómicos o almacenamiento de datos.
            </li>
          </ul>
          <p className="mt-2">
            No se realizarán transferencias sin su consentimiento, salvo las
            legalmente permitidas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Ejercicio de derechos ARCO
          </h2>
          <p>
            Usted tiene derecho de acceder, rectificar o cancelar sus datos
            personales, o de oponerse a su uso. Para ello, puede enviar una
            solicitud vía correo electrónico a:{" "}
            <a
              href="mailto:privacidad@sietepresto.mx"
              className="text-[#09ce89] underline"
            >
              privacidad@sietepresto.mx
            </a>
            , incluyendo:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nombre completo y medios de contacto.</li>
            <li>Documentos que acrediten su identidad.</li>
            <li>Descripción clara del derecho que desea ejercer.</li>
          </ul>
          <p className="mt-2">
            Contamos con un plazo máximo de 20 días hábiles para responder su
            solicitud.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Uso de cookies y tecnologías de rastreo
          </h2>
          <p>
            El sitio web y aplicación de <strong>SÍ TE PRESTO</strong> pueden
            usar cookies, web beacons y otras tecnologías para monitorear su
            comportamiento como usuario de internet, con el objetivo de
            brindarle una mejor experiencia y ofrecerle productos acordes a su
            perfil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Cambios al Aviso de Privacidad
          </h2>
          <p>
            Nos reservamos el derecho de efectuar en cualquier momento
            modificaciones o actualizaciones al presente aviso. Cualquier cambio
            será notificado en nuestro sitio web oficial.
          </p>
        </section>
      </div>
    </section>
  );
}
