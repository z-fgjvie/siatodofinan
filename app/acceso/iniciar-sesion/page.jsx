"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";

export default function PageInicioSesion() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (data) => {
    if (!isValid) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_LOCAL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const respuesta = await response.json();

      if (!response.ok) {
        toast("Credenciales incorrectas", {
          description: "Por favor intenta nuevamente.",
        });
        return;
      }

      localStorage.setItem("token", respuesta.data.access);

      toast("Inicio de sesión exitoso", {
        description: "Bienvenido a tu cuenta de Sí Te Presto.",
      });

      reset();

      if (respuesta.data.rol === "ADMIN") {
        router.push("/dashboard");
        return;
      }

      if (respuesta.data.tipoCliente === "empresa") {
        router.push("/mi-cuenta/empresa");
        return;
      } else {
        router.push("/mi-cuenta/personal");
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-md px-5 py-10 rounded-md w-full max-w-[35rem] lg:w-[25rem] -mt-45 md:-mt-90 lg:-mt-0 bg-white">
      <Image
        src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930497/logo-financiera-h_xsxg1a.png"
        alt="logo si te presto"
        width="105"
        height="105"
        className="mx-auto mb-5 lg:mb-6"
      />
      <h2 className="text-center text-2xl poppins-semibold mb-7">
        Iniciar Sesión
      </h2>

      <form onSubmit={handleSubmit(handleLogin)}>
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
            {...register("usuario", {
              required: true,
            })}
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
            autoComplete="off"
            {...register("password", {
              required: true,
            })}
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
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
            "Ingresar"
          )}
        </button>
      </form>

      <Link
        href="/acceso/registro/personal"
        className="text-sm text-center justify-center flex gap-2"
      >
        ¿No tienes cuenta?{" "}
        <span className="text-[#09ce89] manrope-medium">Registrate</span>
      </Link>
    </div>
  );
}
