import Header from "@/components/header";
import React from "react";
import HeroPyme from "./components/hero-pyme";
import MainPyme from "./components/main-pyme";
import FormularioSolicitud from "./components/formulario-solicitud";
import Footer from "@/components/footer";

export default function PageCreditoPyme() {
  return (
    <>
      <Header />
      <HeroPyme />
      <MainPyme />
      <FormularioSolicitud />
      <Footer />
    </>
  );
}
