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
            El solicitante autoriza a{" "}
            <strong className="text-[#09ce89]">Sí Te Presto</strong> a realizar
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
                <strong>Representante Legal:</strong> Samantha Yuniel Barrios
                Degante
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
            Situación Fiscal emitida por el SAT únicamente persona moral.
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

        <div className="border-t my-4 pt-4 space-y-6 text-justify">
          <h2 className="text-lg font-semibold">
            ¿Qué es el Estudio Socioeconómico de Sí Te Presto?
          </h2>
          <p>
            El estudio socioeconómico es un paso fundamental dentro del proceso
            de solicitud de crédito en{" "}
            <strong className="text-[#09ce89]">Sí Te Presto</strong>,
            especialmente diseñado para personas que:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tienen mal historial crediticio</li>
            <li>No cuentan con historial en buró</li>
            <li>O simplemente quieren demostrar capacidad de pago real</li>
          </ul>
          <p>
            Este estudio <strong className="text-[#09ce89]">NO</strong> es un
            gasto innecesario, sino una herramienta que permite que podamos
            evaluarte de manera justa, más allá de lo que diga el buró de
            crédito.
          </p>

          <h2 className="text-lg font-semibold">¿Para qué sirve?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Evalúa tu capacidad de pago actual:</strong> No nos
              enfocamos solo en el pasado financiero, sino en tu situación real
              y presente.
            </li>
            <li>
              <strong>Mide tu nivel de riesgo financiero:</strong> Con base en
              ingresos, gastos, entorno y actividad económica.
            </li>
            <li>
              <strong>Ofrece un crédito con respaldo adecuado:</strong> Así
              definimos si necesitas o no una garantía, y de cuánto sería.
            </li>
            <li>
              <strong>Abre la puerta a una segunda oportunidad:</strong> Es la
              alternativa cuando otros te han dicho “NO”.
            </li>
          </ul>

          <h2 className="text-lg font-semibold">¿Qué incluye?</h2>
          <p>
            El estudio contempla la recolección y análisis de la siguiente
            información:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Identificación y validación de datos personales</li>
            <li>Actividad económica o laboral actual</li>
            <li>Ingresos y egresos mensuales</li>
            <li>Domicilio y condiciones de vivienda</li>
            <li>Personas dependientes económicamente</li>
            <li>
              Tipo de negocio (en caso de PyME o trabajador independiente)
            </li>
            <li>Análisis de entorno familiar y hábitos financieros</li>
            <li>
              Situación patrimonial básica (bienes, herramientas, vehículos)
            </li>
            <li>Validación visual o documental de la información</li>
          </ul>
          <p className="italic text-sm">
            En algunos casos se puede requerir entrevista telefónica,
            videollamada o visita virtual para validar ciertos datos.
          </p>

          <h2 className="text-lg font-semibold">¿Cuánto cuesta?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>$1,200 MXN</strong> para personas físicas o trabajadores
              independientes
            </li>
            <li>
              <strong>Desde $8,500 MXN</strong> para PyMES y empresas
              (evaluación más extensa y técnica)
            </li>
          </ul>
          <p>
            Este monto{" "}
            <strong className="text-[#09ce89]">no es reembolsable</strong>, ya
            que cubre los costos operativos, validaciones, análisis de riesgo y
            elaboración del dictamen.
          </p>

          <h2 className="text-lg font-semibold">¿Qué pasa después?</h2>
          <ol className="list-decimal pl-5 space-y-1">
            <li>El estudio es evaluado por el área de análisis.</li>
            <li>
              En menos de 72 horas hábiles recibirás una respuesta
              personalizada:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Si calificas para crédito sin garantía</li>
                <li>O si necesitas presentar una garantía en inversión</li>
              </ul>
            </li>
            <li>
              Si aceptas las condiciones, se procede al contrato y al
              desembolso.
            </li>
          </ol>

          <h2 className="text-lg font-semibold">Tu información está segura</h2>
          <p>
            Todos los datos recopilados se manejan con absoluta
            confidencialidad, bajo aviso de privacidad y con protocolos legales.
            Tu confianza es lo más importante para nosotros.
          </p>
        </div>

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
