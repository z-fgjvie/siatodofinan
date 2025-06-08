"use client";
import React, { useEffect } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";

export default function PageMiCuentaEmpresa() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access");

    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <HeaderCuenta />
      <HeroCuenta tipo="Cuenta Empresa" />
      <MainCuenta />
    </>
  );
}
