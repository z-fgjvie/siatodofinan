import React from "react";

export default function Documentos() {
  return (
    <div className="shadow-lg rounded-md p-5 h-fit">
      <h2 className="text-2xl poppins-semibold mb-6  text-gray-800">
        Documentos adjuntos
      </h2>
      <form>
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
