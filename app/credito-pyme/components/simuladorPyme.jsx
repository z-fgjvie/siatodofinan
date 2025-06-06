"use client";
import React, { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { formatearDinero } from "@/lib/formatearDinero";

// 💼 Definimos las tasas según el perfil de riesgo
const perfiles = [
  {
    nombre: "Alta solidez (AAA)",
    tasaMensual: 0.015,
  },
  {
    nombre: "Empresa mediana consolidada",
    tasaMensual: 0.02,
  },
  {
    nombre: "PyME tradicional (riesgo medio)",
    tasaMensual: 0.025,
  },
  {
    nombre: "PyME joven (riesgo alto)",
    tasaMensual: 0.03,
  },
];

export default function SimuladorPyme() {
  const [cantidad, setCantidad] = useState(1000000);
  const [meses, setMeses] = useState(6);
  // 📊 Perfil de riesgo seleccionado
  const [perfil, setPerfil] = useState(perfiles[0]);
  const [totalPagar, setTotalPagar] = useState(0);
  const [mensuales, setMensuales] = useState(0);

  const STEP = 5000;
  const MIN = 1000000;
  const MAX = 200000000;

  // 📌 Calculamos el total a pagar cada vez que cambian cantidad, meses o perfil
  useEffect(() => {
    const tasa = perfil.tasaMensual; // ejemplo: Alta solidez (AAA) = 0.015
    const intereses = cantidad * tasa * meses; // interés total
    const total = cantidad + intereses; // suma de capital + interés
    setTotalPagar(total); // guardamos el total a pagar
  }, [cantidad, meses, perfil]);

  // 📆 Calculamos el pago mensual dividiendo el total entre los meses
  useEffect(() => {
    setMensuales(totalPagar / meses);
  }, [totalPagar, meses]);

  const handleChange = (e) => setCantidad(+e.target.value);

  const handlClickDisminuir = () => {
    const valor = cantidad - STEP;
    if (valor < MIN) return;
    setCantidad(valor);
  };

  const handleClickAumentar = () => {
    const valor = cantidad + STEP;
    if (valor > MAX) return;
    setCantidad(valor);
  };

  return (
    <section
      className="px-5 py-16 flex justify-center scroll-top"
      id="simulador"
    >
      <div className="max-w-[75rem] mx-auto grid lg:grid-cols-2 lg:gap-25">
        <div className="bg-white shadow-xl rounded-md px-7 py-9">
          <h2 className="text-2xl poppins-semibold text-[#283b42] mb-7 text-center">
            ¿Cuánto <span className="text-[#09ce89]">dinero</span> quieres
            solicitar?
          </h2>
          <h3 className="text-center manrope-bold text-4xl text-[#283b42] mb-3">
            {formatearDinero(cantidad)}
          </h3>

          <div className="flex items-center justify-between gap-5 mb-5">
            <button
              type="button"
              onClick={handlClickDisminuir}
              className="cursor-pointer"
            >
              <AiFillMinusCircle className="text-[#09ce89] text-4xl sm:text-[2.5625rem]" />
            </button>
            <input
              type="range"
              className="w-full h-2 bg-gray-200 accent-[#09ce89] hover:accent-[#09ce89] outline-none"
              step={STEP}
              min={MIN}
              max={MAX}
              value={cantidad}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handleClickAumentar}
              className="cursor-pointer"
            >
              <IoAddCircle className="text-[#09ce89] text-[2.4375rem] sm:text-[2.8110rem]" />
            </button>
          </div>

          <h3 className="text-xl manrope-semibold text-[#283b42] text-center">
            Selecciona tu perfil
          </h3>
          <select
            className="mt-3 border w-full p-2 rounded-md border-gray-400 text-center text-[#283b42] font-bold outline-none"
            value={perfil.nombre} // 👈 aquí se muestra el nombre actual del perfil seleccionado
            // 👇 Cuando el usuario selecciona otro perfil, este evento se ejecuta
            onChange={(e) => {
              //find(...) recorre el array perfiles y devuelve el primer objeto que cumpla la condición:
              // Buscamos en el array `perfiles` el objeto que tenga ese nombre
              const seleccionado = perfiles.find(
                (p) => p.nombre === e.target.value // e.target.value es el valor del <option> que se eligió
              );

              // Guardamos ese objeto completo en el estado `perfil`
              setPerfil(seleccionado);
            }}
          >
            {perfiles.map((p) => (
              <option key={p.nombre} value={p.nombre}>
                {p.nombre}
              </option>
            ))}
          </select>

          <h3 className="text-xl manrope-semibold text-[#283b42] text-center mt-6">
            Elige un <span className="text-[#09ce89]">plazo</span> a pagar
          </h3>

          <select
            className="mt-3 border w-full p-2 rounded-md border-gray-400 text-center text-[#283b42] font-bold outline-none"
            value={meses}
            onChange={(e) => setMeses(+e.target.value)}
          >
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
            <option value="48">48 Meses</option>
            <option value="60">60 Meses</option>
          </select>

          <div className="bg-gray-100 my-4 text-center py-3 rounded-md">
            <h2 className="text-xl poppins-semibold text-gray-500 text-center">
              Resumen <span className="text-[#09ce89]">de pagos</span>
            </h2>

            <p className="text-[#283b42] manrope-medium my-2">
              Perfil: <span className="text-gray-600">{perfil.nombre}</span>
            </p>
            <p className="text-[#283b42] manrope-medium my-2">
              Tasa mensual:{" "}
              <span className="text-gray-600">
                {/* 
                - El toFixed(1) es para agarrar solo un decimal , osea si la multiplicacion sale 1.50003 , solo sera   1.5
                - Ahora la multiplicacion * 100 es para que se muestre con porcentaje como 1.5 , 2.0 cosas asi porque en el array como vez las tasaMensual esta como 0.015 , 0.02 
                */}
                {(perfil.tasaMensual * 100).toFixed(1)}%
              </span>
            </p>
            <p className="text-[#283b42] manrope-medium my-2">
              <span className="text-gray-600 mr-1">{meses}</span> Meses
            </p>
            <p className="text-[#283b42] manrope-medium my-2">
              <span className="text-gray-600 mr-1">
                {formatearDinero(totalPagar)}
              </span>
              Total a pagar
            </p>
            <p className="text-[#283b42] manrope-medium my-2">
              <span className="text-gray-600 mr-1">
                {formatearDinero(mensuales)}
              </span>{" "}
              Mensuales
            </p>
          </div>

          <Link
            href="/acceso/registro/empresa"
            className="w-full flex items-center gap-2 justify-center bg-[#09ce89] text-white rounded-md py-[0.655rem] mt-5 cursor-pointer manrope-semibold text-center"
          >
            Solicitar Crédito
            <FiArrowUpRight className="text-[1.375rem]" />
          </Link>
        </div>

        <div>
          <Image
            src="/simul.svg"
            alt="logo"
            width="500"
            height="500"
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}
