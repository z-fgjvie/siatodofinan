import Beneficios from "@/components/beneficios";
import Confianza from "@/components/confianza";
import Diferencia from "@/components/diferencia";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Beneficios />
      <Confianza />
      <Diferencia />
    </>
  );
}
