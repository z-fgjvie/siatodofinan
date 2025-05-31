import Link from "next/link";
import React from "react";

export default function PageRegistro() {
  return (
    <div className="shadow-md px-5 py-10 rounded-md w-full max-w-[35rem] md:w-[35rem] -mt-40 md:-mt-0 bg-white ">
      <p className="text-xs text-center">Logo</p>
      <h2 className="text-center text-2xl poppins-semibold mb-7">Registrate</h2>

      <form>
        <div className="grid lg:grid-cols-2 lg:gap-x-5">
          <div className="mb-7">
            <label
              htmlFor="nombre"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Nombre completo (INE)
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="curp"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              CURP (opcional)
            </label>
            <input
              type="text"
              name="curp"
              id="curp"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="fecha"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              name="fecha"
              id="fecha"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="estado"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Estado civil
            </label>
            <input
              type="text"
              name="estado"
              id="estado"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="domicilio"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Domicilio completo
            </label>
            <input
              type="text"
              name="domicilio"
              id="domicilio"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="telefono"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Teléfono de contacto
            </label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="correo"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="correo"
              id="correo"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="ocupacion"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Ocupación o actividad económica
            </label>
            <input
              type="text"
              name="ocupacion"
              id="ocupacion"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="ingresos"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Ingresos mensuales aproximados (MXN)
            </label>
            <input
              type="text"
              name="ingresos"
              id="ingresos"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full block bg-[#09ce89] text-white rounded-md py-[0.655rem] mb-10 cursor-pointer"
        >
          Registrarse
        </button>
      </form>

      <Link
        href="/acceso/iniciar-sesion"
        className="text-sm text-center justify-center flex gap-2"
      >
        ¿Ya tienes cuenta? <span className="text-[#09ce89]">Inicia sesión</span>
      </Link>
    </div>
  );
}
