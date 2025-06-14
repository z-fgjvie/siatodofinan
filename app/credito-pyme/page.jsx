import Header from "@/components/header";
import React from "react";
import HeroPyme from "./components/hero-pyme";
import MainPyme from "./components/main-pyme";
import SimuladorPyme from "./components/simuladorPyme";
import FooterApp from "@/components/footerApp";

export default function PageCreditoPyme() {
  return (
    <>
      <Header />
      <HeroPyme />
      <MainPyme />
      <SimuladorPyme />
      <FooterApp />
    </>
  );
}
