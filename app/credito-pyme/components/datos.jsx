import React from "react";

export default function Datos() {
  return (
    <div className="shadow-lg rounded-md p-5">
      <h2 className="text-2xl poppins-semibold mb-6  text-gray-800">
        Datos Requeridos
      </h2>
      <form>
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
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="rfc"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Nombre y RFC de la empresa
          </label>
          <input
            type="text"
            name="rfc"
            id="rfc"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="cel"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Número de celular
          </label>
          <input
            type="tel"
            name="cel"
            id="cel"
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
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="antiguedad"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Antigüedad del negocio y giro
          </label>
          <input
            type="text"
            name="antiguedad"
            id="antiguedad"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="monto"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Monto y plazo solicitado
          </label>
          <input
            type="text"
            name="monto"
            id="monto"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="finalidad"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Finalidad del crédito
          </label>
          <input
            type="text"
            name="finalidad"
            id="finalidad"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="ingresosma"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Ingresos mensuales/anuales
          </label>
          <input
            type="text"
            name="ingresosma"
            id="ingresosma"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="garantias"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Garantías (si aplica)
          </label>
          <input
            type="text"
            name="garantias"
            id="garantias"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full block bg-[#09ce89] text-white rounded-md py-[0.655rem] mb-10 cursor-pointer manrope-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
