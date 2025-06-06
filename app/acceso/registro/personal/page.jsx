import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PageRegistroPersonal() {
  return (
    <div className="shadow-md px-5 py-10 rounded-md w-full max-w-[40rem] lg:w-[30rem]  -mt-45 md:-mt-90 lg:-mt-0  bg-white ">
      <Image
        src="/logo-financiera-h.png"
        alt="logo si te presto"
        width="105"
        height="105"
        className="mx-auto mb-5 lg:mb-6"
      />
      <h2 className="text-center text-2xl poppins-semibold mb-7">Registrate</h2>

      <form>
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
            autoComplete="off"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="usuario"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Usuario
          </label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            autoComplete="off"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
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
            autoComplete="off"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
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
            autoComplete="off"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <div className="mb-7">
          <label
            htmlFor="password"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full block bg-[#09ce89] text-white rounded-md py-[0.655rem] mb-10 cursor-pointer manrope-semibold"
        >
          Registrarse
        </button>
      </form>

      <Link
        href="/acceso/iniciar-sesion"
        className="text-sm text-center justify-center flex gap-2"
      >
        ¿Ya tienes cuenta?{" "}
        <span className="text-[#09ce89] manrope-medium">Inicia sesión</span>
      </Link>
    </div>
  );
}
