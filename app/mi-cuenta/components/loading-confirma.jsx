import Image from "next/image";
import React from "react";

export default function LoadingConfirma() {
  return (
    <div className="flex justify-center items-center h-[15rem] mx-auto">
      {/* Spinner con logo */}
      <div className="relative flex items-center justify-center w-22 h-22 mx-auto">
        <span className="absolute inline-flex h-full w-full animate-spin rounded-full border-4 border-t-[#09ce89] border-b-transparent border-l-transparent border-r-transparent" />
        <Image
          src="https://res.cloudinary.com/dauhuy8u6/image/upload/f_auto,q_auto/v1749930495/icon-financiera_pqpbmr.png"
          width="35"
          height="35"
          alt="logo siatodo"
          className="z-10"
        />
      </div>

      {/* Texto debajo */}
      <p className="text-[13px] text-white poppins-regular text-center">
        Estamos procesando tu <br /> solicitud
      </p>
    </div>
  );
}
