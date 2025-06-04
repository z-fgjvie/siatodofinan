import Heading from "@/components/heading";
import React from "react";
import Datos from "./datos";
import Documentos from "./documentos";

export default function FormularioSolicitud() {
  return (
    <section className="px-5 py-16">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo="Formulario de Solicitud"
          descripcion="Proporcione la información requerida para iniciar su solicitud de crédito PyME."
        />

        <div className="grid md:grid-cols-2 gap-14 md:gap-10">
          <Datos />
          <Documentos />
        </div>
      </div>
    </section>
  );
}
