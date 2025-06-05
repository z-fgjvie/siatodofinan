import Heading from "@/components/heading";
import React from "react";
import Datos from "./datos";

export default function FormularioSolicitud() {
  return (
    <section className="px-5 py-16">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Formulario de Solicitud"
          descripcion="Proporcione la información requerida para iniciar su solicitud de crédito PyME."
        />

        <div>
          <Datos />
        </div>
      </div>
    </section>
  );
}
