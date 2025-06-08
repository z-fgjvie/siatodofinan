"use client";
import React, { useState } from "react";
import HeaderCuenta from "../components/header-cuenta";
import HeroCuenta from "../components/hero-cuenta";
import MainCuenta from "../components/main-cuenta";
import { useRouter } from "next/navigation";

export default function PageMiCuentaEmpresa() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access");
    if (!storedToken) {
      router.push("/iniciar-sesion");
    } else {
      setToken(storedToken);
    }
  }, [router]);

  if (!token) return null; // Evita renderizar mientras no hay token

  return (
    <>
      <HeaderCuenta />
      <HeroCuenta tipo="Cuenta Empresa" />
      <MainCuenta />
    </>
  );
}
