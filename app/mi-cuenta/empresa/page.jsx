"use client";
import React, { useEffect, useState } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";
import FormularioEmpresarial from "./components/formulario-empresarial";
import { getUser } from "@/lib/getUser";
import CardMontoGarantia from "../components/card-monto-garantia";
import { dataGarantias } from "@/app/api/dataGarantias";
import Felicitaciones from "../components/felicitaciones";
import Footer from "@/components/footer";

export default function PageMiCuentaEmpresa() {
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
        tipo="Cuenta Empresa"
        bienvenida={
          <>
            Bienvenido al panel de financiamiento empresarial de{" "}
            <span className="text-[#09ce89] manrope-semibold">
              Sí Te Presto
            </span>
            . Aquí puedes administrar tu cuenta de ahorro, solicitar un Crédito
            PyME y dar seguimiento a cada etapa del proceso.
          </>
        }
      />
      <section className="px-5 py-10">
        <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-9 md:gap-12">
          <MainCuenta />
          {montoDeGarantia > 0 ? (
            !garantiaAprobada ? (
              <CardMontoGarantia monto={montoDeGarantia} tipo="empresa" />
            ) : (
              <Felicitaciones />
            )
          ) : (
            <div className="rounded-md shadow bg-white p-5">
              <FormularioEmpresarial />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
