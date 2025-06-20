import React from "react";
import HeroConfidencialidad from "./components/hero-confidencialidad";
import MainConfidencialidad from "./components/main-confidencialidad";
import FooterApp from "@/components/footerApp";
import Header from "@/components/header";

export default function AvisoDeConfidencialidad() {
  return (
    <>
      <Header />
      <HeroConfidencialidad />
      <MainConfidencialidad />
      <FooterApp />
    </>
  );
}
