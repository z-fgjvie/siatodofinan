"use client";
import React, { useEffect } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";

export default function PageMiCuentaEmpresa() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, [router]);

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
          <div>
            <h3>Solicitud Empresarial</h3>
          </div>
        </div>
      </section>
    </>
  );
}
