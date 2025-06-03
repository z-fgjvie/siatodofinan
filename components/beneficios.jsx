import React from "react";
import Heading from "./heading";
import Image from "next/image";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import CardBeneficios from "./card-beneficios";

export default function Beneficios() {
  return (
    <section className="px-5 py-16">
      <div className="max-w-[75rem] mx-auto">
        <Heading
          titulo=" Beneficios que te ofrecemos"
          descripcion="Te damos el impulso que tu y tu negocio necesitan, sin complicaciones."
        />

        <div className="grid md:grid-cols-2 gap-7 md:gap-16 items-center">
          <Image
            src="/beneficios-imagen.jpg"
            alt="imagen de beneficios"
            width="500"
            height="500"
            className="w-full rounded-md"
          />

          <div>
            <CardBeneficios
              icono={TbCircleNumber1Filled}
              texto="Tu crédito SIN complicaciones. Olvídate del buró de crédito, aquí sí importas tú."
              className="mb-4"
            />
            <CardBeneficios
              icono={TbCircleNumber2Filled}
              texto="Fondo seguro: tu garantía no se pierde, ¡se recupera y hasta genera rendimiento!"
              className="mb-4"
            />
            <CardBeneficios
              icono={TbCircleNumber3Filled}
              texto="Atención personalizada y humana. No eres solo un número, eres parte de nuestro crecimiento."
              className="mb-4"
            />
            <CardBeneficios
              icono={TbCircleNumber4Filled}
              texto="Respaldo inmediato y confiable. Te ayudamos a avanzar con procesos claros y atención oportuna."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/*

🌟 Beneficios que te ofrecemos
Tu crédito SIN complicaciones. Olvídate del buró de crédito, aquí sí importas tú.

Fondo seguro: tu garantía no se pierde, ¡se recupera y hasta genera rendimiento!

Atención personalizada y humana. No eres solo un número, eres parte de nuestro crecimiento.

Respaldo inmediato y confiable. Te ayudamos a avanzar con procesos claros y atención oportuna.
*/
