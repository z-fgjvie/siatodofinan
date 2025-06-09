"use client";
import React, { useEffect } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";
import FormularioPersonal from "./components/formulario-personal";

export default function PageMiCuentaPersonal() {
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
      <section className="px-5 py-10">
        <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 gap-9 md:gap-12">
          <MainCuenta />
          <div className="bg-[#ebf5f6] p-5 rounded-md">
            <FormularioPersonal />
          </div>
        </div>
      </section>
    </>
  );
}
