import Image from "next/image";
import React from "react";

export default function HeaderCuenta() {
  return (
    <header className="px-5 py-4 md:pt-4 md:pb-0 bg-[#ebf5f6]">
      <div className="max-w-[75rem] mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/logo-financiera-h.png"
            alt="logo si te presto"
            width="100"
            height="100"
            className="cursor-pointer w-[6.875rem]  md:w-[7.5rem] "
          />
        </div>

        <button className="bg-[#09ce89] text-white manrope-bold text-lg w-10 h-10 rounded-full">
          C
        </button>
      </div>
    </header>
  );
}
