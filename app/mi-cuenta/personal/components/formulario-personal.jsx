import { getUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../components/loading";
import { simuladorPersonalStore } from "@/lib/simulador-personal-store";

export default function FormularioPersonal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [fondo, setFondo] = useState(false);
  const [estudio, setEstudio] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [nombreDefecto, setNombreDefecto] = useState("");
  const [correoPersona, setCorreoPersona] = useState("");
  const { montoPersonal, setMontoPersonal, vieneSimulador } =
    simuladorPersonalStore();
  const router = useRouter();

  const handleClick = () => {
    setCheckbox(!checkbox);
  };
  const handleClickFondo = () => {
    setFondo(!fondo);
  };

  const handleClickEstudio = () => {
    setEstudio(!estudio);
  };

  const handleClickTerminos = () => {
    setTerminos(!terminos);
  };

  useEffect(() => {
    const cargarDatos = async () => {
      const user = await getUser();
      console.log(user);
      setNombreDefecto(user.nombreCompleto);
      setCorreoPersona(user.email);
    };
    cargarDatos();
  }, []);

  console.log(correoPersona);
  console.log(nombreDefecto);

  const handleNext = () => {
    if (!isValid) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/mi-cuenta/personal/credito-con-garantia-personal");
      reset();
    }, 20000);
  };

  return (
    <>
      {loading && <Loading />}
      <div>
        <h3 className="text-2xl text-center mb-3 text-[#09ce89] poppins-semibold	">
          Solicitud de Crédito Personal (Desde $20,000 hasta $250,000)
        </h3>
        <p className="text-center mb-8 text-gray-600">
          Llena tu solicitud de crédito en línea
        </p>

        <form onSubmit={handleSubmit(handleNext)}>
          <div className="mb-7">
            <label
              htmlFor="nombre"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Nombre completo (INE)
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              autoComplete="off"
              defaultValue={nombreDefecto}
              readOnly
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="curp"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              CURP
            </label>
            <input
              type="text"
              name="curp"
              id="curp"
              autoComplete="off"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="nacimiento"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              name="nacimiento"
              id="nacimiento"
              autoComplete="off"
              {...register("nacimiento", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="estado"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Estado civil
            </label>
            <input
              type="text"
              name="estado"
              id="estado"
              autoComplete="off"
              {...register("estado", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-7">
            <label
              htmlFor="domicilio"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Domicilio completo
            </label>
            <input
              type="text"
              name="domicilio"
              id="domicilio"
              autoComplete="off"
              {...register("domicilio", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="referenciaUno"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Referencia 1
            </label>
            <input
              type="text"
              name="referenciaUno"
              id="referenciaUno"
              autoComplete="off"
              {...register("referenciaUno", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm mb-5"
              placeholder="Nombre Completo"
            />
            <input
              type="text"
              name="referenciaUnoD"
              id="referenciaUnoD"
              autoComplete="off"
              maxLength={10}
              {...register("referenciaUnoD", {
                required: true,
                minLength: 10,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
              placeholder="Numero de Telefono"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="referenciaDos"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Referencia 2
            </label>
            <input
              type="text"
              name="referenciaDos"
              id="referenciaDos"
              autoComplete="off"
              {...register("referenciaDos", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm mb-5"
              placeholder="Nombre Completo"
            />
            <input
              type="text"
              name="referenciaDosD"
              id="referenciaDosD"
              autoComplete="off"
              maxLength={10}
              {...register("referenciaDosD", {
                required: true,
                minLength: 10,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
              placeholder="Numero de Telefono"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="correo"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Correo electrónico
            </label>
            <input
              type="text"
              name="correo"
              id="correo"
              defaultValue={correoPersona}
              readOnly
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="ocupacion"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Ocupación / actividad económica
            </label>
            <input
              type="text"
              name="ocupacion"
              id="ocupacion"
              autoComplete="off"
              {...register("ocupacion", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="ingresos"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Ingresos mensuales aproximados (MXN)
            </label>
            <input
              type="text"
              name="ingresos"
              id="ingresos"
              autoComplete="off"
              {...register("ingresos", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="monto"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Monto del crédito solicitado
            </label>
            <input
              type="text"
              name="monto"
              id="monto"
              value={montoPersonal}
              {...register("monto", {
                required: true,
                onChange: (e) => setMontoPersonal(Number(e.target.value)),
                validate: (value) =>
                  vieneSimulador || (value >= 20000 && value <= 250000),
              })}
              readOnly={vieneSimulador}
              autoComplete="off"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="grid lg:grid-cols-2 lg:gap-5">
            <div className="mb-7">
              <label
                htmlFor="inefrente"
                className="text-[0.93rem] text-gray-600 mb-2 block"
              >
                Copia de INE (frente)
              </label>
              <input
                type="file"
                name="inefrente"
                id="inefrente"
                autoComplete="off"
                {...register("inefrente", {
                  required: true,
                })}
                className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor="inereverso"
                className="text-[0.93rem] text-gray-600 mb-2 block"
              >
                Copia de INE (reverso)
              </label>
              <input
                type="file"
                name="inereverso"
                id="inereverso"
                autoComplete="off"
                {...register("inereverso", {
                  required: true,
                })}
                className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
              />
            </div>
          </div>

          <div className="mb-7">
            <label
              htmlFor="cpdomicilio"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Comprobante de domicilio reciente
            </label>
            <input
              type="file"
              name="cpdomicilio"
              id="cpdomicilio"
              autoComplete="off"
              {...register("cpdomicilio", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-4 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="acepto"
              onClick={handleClick}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                checkbox
                  ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]"
                  : ""
              } `}
              id="acepto"
              {...register("acepto", {
                required: true,
              })}
            />
            <label htmlFor="acepto" className="text-[13px] text-gray-500 ml-4">
              Autorizo a{" "}
              <span className="text-[#09ce89] manrope-semibold">
                Sí Te Presto
              </span>{" "}
              para consultar mi historial crediticio ante{" "}
              <span className="text-[#09ce89] manrope-semibold">
                {" "}
                Buró de Crédito y Círculo de Crédito
              </span>{" "}
              con fines de evaluación financiera.
            </label>
          </div>
          {/* <div className="mb-4 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="fondo"
              onClick={handleClickFondo}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                fondo ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]" : ""
              } `}
              id="fondo"
              {...register("fondo", {
                required: true,
              })}
            />
            <label htmlFor="fondo" className="text-[13px] text-gray-500 ml-4">
              Acepto dejar{" "}
              <span className="text-[#09ce89] manrope-semibold">
                fondo de garantía
              </span>{" "}
              del 30% al 50%
            </label>
          </div> */}
          {/* <div className="mb-4 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="estudiosoci"
              onClick={handleClickEstudio}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                estudio ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]" : ""
              } `}
              id="estudiosoci"
              {...register("estudiosoci", {
                required: true,
              })}
            />
            <label
              htmlFor="estudiosoci"
              className="text-[13px] text-gray-500 ml-4"
            >
              Acepto cubrir{" "}
              <span className="text-[#09ce89] manrope-semibold">
                estudio socioeconómico
              </span>{" "}
              de $1,200
            </label>
          </div> */}
          <div className="mb-7 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="terminos"
              onClick={handleClickTerminos}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                terminos
                  ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]"
                  : ""
              } `}
              id="terminos"
              {...register("terminos", {
                required: true,
              })}
            />
            <label
              htmlFor="terminos"
              className="text-[13px] text-gray-500 ml-4"
            >
              Acepto los{" "}
              <span className="text-[#09ce89] manrope-semibold">términos</span>{" "}
              y{" "}
              <span className="text-[#09ce89] manrope-semibold">
                condiciones
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full block bg-[#09ce89] text-white rounded-md h-[2.795rem] mb-10 cursor-pointer manrope-semibold ${
              isValid ? "" : "opacity-50"
            }`}
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </>
  );
}
