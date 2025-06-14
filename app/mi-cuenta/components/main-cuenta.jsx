"use client";
import React, { useEffect, useState } from "react";
import SaldoCuenta from "./saldoCuenta";
import SaldoPrestamos from "./saldoPrestamos";
import { getUser } from "@/lib/getUser";
import CardMontoGarantia from "./card-monto-garantia";

export default function MainCuenta() {
  // const [montoDeGarantia, setMontoDeGarantia] = useState(0);
  // useEffect(() => {
  //   const mostrarMontoGarantia = async () => {
  //     const user = await getUser();

  //     setMontoDeGarantia(user.montoGarantia);
  //   };

  //   mostrarMontoGarantia();
  // }, []);

  return (
    <div>
      <SaldoPrestamos />
      <SaldoCuenta />
      {/*
      - Mostramos el componente CardMontoGarantia solo si el usuario tiene un monto de garantía asignado (mayor a 0). 
      - Esto evita que el card aparezca si aún no se ha asignado ningún monto. montoGarantia distinto de null o undefined. 
      {montoDeGarantia > 0 && <CardMontoGarantia monto={montoDeGarantia} />} */}
    </div>
  );
}
