import React from "react";

export default function Documentos() {
  return (
    <div className="shadow-lg rounded-md p-5 h-fit">
      <h2 className="text-2xl poppins-semibold mb-6  text-gray-800">
        Documentos adjuntos
      </h2>
      <form>
        <div className="mb-7">
          <label
            htmlFor="acta"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Acta constitutiva
          </label>
          <input
            type="file"
            name="acta"
            id="acta"
            accept=".pdf,.jpg,.png"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="identidicacion"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Identificación oficial
          </label>
          <input
            type="file"
            name="identificacion"
            id="identificacion"
            accept=".pdf,.jpg,.png"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="sat"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Opinión del SAT positiva (32D)
          </label>
          <input
            type="file"
            name="sat"
            id="sat"
            accept=".pdf,.jpg,.png"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="estadocuenta"
            className="text-[0.93rem] text-gray-600 mb-2 block"
          >
            Estados de cuenta (últimos 3 meses)
          </label>
          <input
            type="file"
            name="estadocuenta"
            id="estadocuenta"
            accept=".pdf,.jpg,.png"
            className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full block bg-[#09ce89] text-white rounded-md py-[0.655rem] mb-10 cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
