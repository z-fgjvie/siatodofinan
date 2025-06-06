import Header from "@/components/header";
import React from "react";
import HeroPyme from "./components/hero-pyme";
import MainPyme from "./components/main-pyme";
import Footer from "@/components/footer";
import IniciosEstaticos from "@/components/inicios-staticos";
import SimuladorPyme from "./components/simuladorPyme";

export default function PageCreditoPyme() {
  return (
    <>
      <Header />
      <HeroPyme />
      <MainPyme />
      <SimuladorPyme />
      <IniciosEstaticos />
      <Footer />
    </>
  );
}
