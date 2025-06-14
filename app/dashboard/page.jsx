import React from "react";
import TablaAsignarMonto from "./components/tabla-asignar-montos";

export default function PageDashboard() {
  return (
    <>
      <section>
        <h2 className="text-2xl poppins-semibold text-center my-5">
          Panel Administrador
        </h2>
      </section>

      <TablaAsignarMonto />
    </>
  );
}
