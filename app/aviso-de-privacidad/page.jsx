import React from "react";
import HeroAviso from "./components/hero-aviso";
import MainAviso from "./components/main-aviso";
import FooterApp from "@/components/footerApp";
import Header from "@/components/header";

export default function AvisoDePrivacidad() {
  return (
    <>
      <Header />
      <HeroAviso />
      <MainAviso />
      <FooterApp />
    </>
  );
}
