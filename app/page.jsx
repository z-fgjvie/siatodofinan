import Banner from "@/components/banner";
import Beneficios from "@/components/beneficios";
import Confianza from "@/components/confianza";
import Diferencia from "@/components/diferencia";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ModalidadPrestamo from "@/components/modalidad-prestamo";
import QuienesSomos from "@/components/quienes-somos";
import Simulador from "@/components/simulador";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <QuienesSomos />
      <ModalidadPrestamo />
      <Beneficios />
      <Confianza />
      <Simulador />
      <Banner />
      <Diferencia />
    </>
  );
}
