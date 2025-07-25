"use client";
import { IoClose } from "react-icons/io5";
import { MdUploadFile } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../../components/loading";
import { simuladorEmpresaStore } from "@/lib/simulador-empresa-store";
import { getUser } from "@/lib/getUser";

export default function ModalEmpresa({ openModal, setOpenModal }) {
  const [loading, setLoading] = useState(false);
  const { montoEmpresa } = simuladorEmpresaStore();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const router = useRouter();

  const enviarComprobante = async (data) => {
    if (!isValid) return;

    setLoading(true);
    setOpenModal(false);
    const formData = new FormData();

    formData.append("comprobante", data.comprobante[0]);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/socioeconomico/crear-socioeconomico`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const user = await getUser();
      const id = user.id;

      console.log(id);

      if (response.ok) {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/update/${id}`,
          {
            method: "PATCH", // o PATCH, depende de tu backend
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ saldoPrestamo: montoEmpresa }),
          }
        );
        setTimeout(() => {
          router.push("/mi-cuenta/empresa/pago-estudio-empresa");
        }, 3000);
      } else {
        console.log("Error al enviar el comprobante");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div
        className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5 transition-opacity duration-300 ${
          openModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl max-w-lg w-full py-6 px-5 shadow-lg relative">
          {/* Cerrar */}
          <button
            onClick={() => setOpenModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
          >
            <IoClose />
          </button>

          {/* Título */}
          <h2 className="text-2xl manrope-semibold mb-5 text-center text-gray-900">
            Información para continuar con tu solicitud
          </h2>

          {/* Datos bancarios */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <BsBank className="text-[#09ce89] text-xl" />
              <h3 className="text-lg manrope-medium text-gray-800">
                Datos bancarios
              </h3>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 space-y-1">
              <p>
                <strong>Cuenta:</strong> 002540702027247851
              </p>
              <p>
                <strong>Banco:</strong> BANAMEX
              </p>
              <p>
                <strong>Representante legal:</strong> Samantha Yuniel Barrios
                Degante
              </p>
            </div>
          </div>

          {/* Subir comprobante */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <MdUploadFile className="text-[#09ce89] text-xl" />
              <h3 className="text-lg manrope-medium text-gray-800">
                Sube tu comprobante
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Sube tu ticket, captura o comprobante en formato PDF, JPG o PNG.
            </p>
            <form
              onSubmit={handleSubmit(enviarComprobante)}
              encType="multipart/form-data"
            >
              <div className="mb-5">
                <input
                  type="file"
                  id="comprobante"
                  name="comprobante"
                  accept=".jpg, .jpeg, .png, .pdf"
                  className="hidden"
                  {...register("comprobante", {
                    required: true,
                  })}
                />
                <label
                  htmlFor="comprobante"
                  className="cursor-pointer bg-[#09ce89] hover:bg-[#08b67a] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors inline-block"
                >
                  Subir comprobante de pago
                </label>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`  text-white px-4 py-2 rounded-lg  font-medium text-sm transition-colors ${
                  isValid ? "bg-gray-800 cursor-pointer" : "bg-gray-400 "
                }`}
              >
                Enviar comprobante
              </button>
            </form>
          </div>

          {/* Cuenta para depósito de garantía */}

          {/* Mensaje motivacional */}
          <div className="grid grid-cols-[auto_1fr] gap-3 bg-gray-100 p-4 rounded-lg">
            <FaCheckCircle className="text-[#09ce89] text-lg mt-1" />
            <p className="text-sm text-gray-800">
              Tu compromiso hoy abre las puertas a un mejor mañana. En{" "}
              <strong className="text-[#09ce89]">Sí Te Presto</strong>,
              premiamos tu esfuerzo y responsabilidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
