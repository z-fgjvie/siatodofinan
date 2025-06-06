import React from "react";
import Transferencias from "./transferencias";
import SaldoCuenta from "./saldoCuenta";

export default function MainCuenta() {
  return (
    <section className="px-5 py-10">
      <div className="max-w-[75rem] gap-y-12 lg:gap-12 mx-auto grid lg:grid-cols-[1fr_2fr]  ">
        <Transferencias />
        <SaldoCuenta />
      </div>
    </section>
  );
}
