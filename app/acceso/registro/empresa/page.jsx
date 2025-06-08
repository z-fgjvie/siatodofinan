"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";

export default function PageRegistroEmpresa() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEnvioEmpresa = async (data) => {
    if (!isValid) return;
    setLoading(true);
    try {
      const datoTipo = {
        ...data,
        tipoCliente: "empresa",
      };
      console.log(process.env.NEXT_PUBLIC_API_URL);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/registro`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datoTipo),
        }
      );

      const respuesta = await response.json();

      if (!response.ok) {
        toast("Error al registrarse", {
          description: "Por favor intenta nuevamente.",
        });

        return;
      }
      toast("Registro exitoso", {
        description: "Usuario creado correctamente.",
      });
      router.push("/acceso/iniciar-sesion");
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-md px-5 py-10 rounded-md w-full max-w-[40rem] lg:w-[38rem] -mt-45 md:-mt-90 lg:-mt-0  bg-white ">
      <Image
        src="/logo-financiera-h.png"
        alt="logo si te presto"
        width="105"
        height="105"
        className="mx-auto mb-5 lg:mb-6"
      />
      <h2 className="text-center text-2xl poppins-semibold mb-7">Empresa</h2>

      <form onSubmit={handleSubmit(handleEnvioEmpresa)}>
        <div className="grid md:grid-cols-2 md:gap-x-5">
          <div className="mb-7">
            <label
              htmlFor="representante"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Nombre del representante legal
            </label>
            <input
              type="text"
              name="representante"
              id="representante"
              autoComplete="off"
              {...register("representante", { required: true, minLength: 4 })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="nombreEmpresa"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Nombre y RFC de la empresa
            </label>
            <input
              type="text"
              name="nombreEmpresa"
              id="nombreEmpresa"
              autoComplete="off"
              {...register("nombreEmpresa", { required: true, minLength: 4 })}
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
              {...register("usuario", { required: true, minLength: 6 })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="email"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              })}
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
              maxLength={10}
              autoComplete="off"
              {...register("telefono", {
                required: true,
                minLength: 10,
              })}
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
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`w-full block bg-[#09ce89] text-white rounded-md h-[2.795rem] mb-10 cursor-pointer manrope-semibold ${
            isValid ? "" : "opacity-50"
          }`}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="mx-auto text-[1.375rem] animate-spin" />
          ) : (
            "Registrarme"
          )}
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
