import Link from "next/link";
import React from "react";

export default function PageInicioSesion() {
  return (
    <div className="shadow-md px-5 py-10 rounded-md w-full max-w-[35rem] md:w-[25rem] -mt-40 md:-mt-0 bg-white">
      <p className="text-xs text-center">Logo</p>
      <h2 className="text-center text-2xl poppins-semibold mb-7">
        Iniciar Sesión
      </h2>

      <form>
        <div className="mb-7">
          <label
            htmlFor="usuario"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Usuario o correo electrónico
          </label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full block bg-[#09ce89] text-white rounded-md py-[0.655rem] mb-10 cursor-pointer"
        >
          Ingresar
        </button>
      </form>

      <Link
        href="/acceso/registro"
        className="text-sm text-center justify-center flex gap-2"
      >
        ¿No tienes cuenta? <span className="text-[#09ce89]">Registrate</span>
      </Link>
    </div>
  );
}
