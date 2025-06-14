"use client";
import React, { useEffect, useState } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";
import FormularioPersonal from "./components/formulario-personal";
import Footer from "@/components/footer";
import { getUser } from "@/lib/getUser";
import CardMontoGarantia from "../components/card-monto-garantia";
import { dataGarantias } from "@/app/api/dataGarantias";
import Felicitaciones from "../components/felicitaciones";

export default function PageMiCuentaPersonal() {
  const [montoDeGarantia, setMontoDeGarantia] = useState(0);
  const [garantiaAprobada, setGarantiaAprobada] = useState(false);
  const { result, loading } = dataGarantias();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const mostrarMontoGarantia = async () => {
      const user = await getUser();

      setMontoDeGarantia(user.montoGarantia);
    };

    mostrarMontoGarantia();
  }, []);

  useEffect(() => {
    const verificarGarantia = async () => {
      const user = await getUser();

      if (!loading && result) {
        const garantia = result.find(
          (g) => g.usuarioId === user.id && g.estado === "aprobado"
        );
        if (garantia) {
          setGarantiaAprobada(true);
        }
      }
    };

    verificarGarantia();
  }, [result, loading]);

  return (
    <>
      <HeaderCuenta />
      <HeroCuenta
        tipo="Cuenta Personal"
        bienvenida={
          <>
            Bienvenido a tu cuenta en{" "}
            <span className="text-[#09ce89] manrope-semibold">
              Sí Te Presto
            </span>
            . Aquí podrás consultar tu cuenta de ahorro, solicitar un crédito
            personal o continuar con tu proceso.
          </>
        }
      />
      <section className="px-5 py-10 mb-5">
        <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-9 md:gap-12">
          <MainCuenta />

          {/*
            - Mostramos el componente CardMontoGarantia solo si el usuario tiene un monto de garantía asignado (mayor a 0). 
            - Esto evita que el card aparezca si aún no se ha asignado ningún monto. montoGarantia distinto de null o undefined. */}
          {montoDeGarantia > 0 ? (
            !garantiaAprobada ? (
              <CardMontoGarantia monto={montoDeGarantia} tipo="personal" />
            ) : (
              <Felicitaciones />
            )
          ) : (
            <div className="rounded-md shadow bg-white p-5">
              <FormularioPersonal />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
