import React from "react";
import HeaderCuenta from "../../components/header-cuenta";
import InfoConfirmacion from "../../components/info-confirmacion";
import Footer from "@/components/footer";

export default function PagePagoEstudioPersonal() {
  return (
    <>
      <HeaderCuenta />
      <InfoConfirmacion direccion="/mi-cuenta/personal" />
      <Footer />
    </>
  );
}
