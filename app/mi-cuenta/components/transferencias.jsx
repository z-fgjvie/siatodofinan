import React from "react";
import { TbRepeat } from "react-icons/tb";

export default function Transferencias() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl  poppins-semibold text-[#09ce89] mb-3 lg:mb-7">
        Transferencias
      </h2>

      <div className="shadow-md p-5 rounded-md">
        <div className="flex items-center justify-between mb-5">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="bg-[#09ce89] flex items-center justify-center rounded-full w-9 h-9">
              <TbRepeat className="text-white text-lg" />
            </div>
            <p className="text-gray-700">6 de Junio</p>
          </div>

          <p className="manrope-medium">$1,000</p>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
            <div className="bg-[#09ce89] flex items-center justify-center rounded-full w-9 h-9">
              <TbRepeat className="text-white text-lg" />
            </div>
            <p className="text-gray-700">8 de Junio</p>
          </div>

          <p className="manrope-medium">$2,400</p>
        </div>
      </div>
    </div>
  );
}
