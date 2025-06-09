import React from "react";
import SaldoCuenta from "./saldoCuenta";
import SaldoPrestamos from "./saldoPrestamos";

export default function MainCuenta() {
  return (
    <div>
      <SaldoPrestamos />
      <SaldoCuenta />
    </div>
  );
}
