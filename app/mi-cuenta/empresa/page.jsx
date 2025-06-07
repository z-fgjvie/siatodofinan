import React from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";

export default function PageMiCuentaEmpresa() {
  return (
    <>
      <HeaderCuenta />
      <HeroCuenta tipo="Cuenta Empresa" />
      <MainCuenta />
    </>
  );
}
