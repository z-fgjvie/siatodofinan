import { getUser } from "@/lib/getUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../components/loading";
import { simuladorEmpresaStore } from "@/lib/simulador-empresa-store";

export default function FormularioEmpresarial() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [terminos, setTerminos] = useState(false);
  const [revision, setRevision] = useState(false);
  const [adhesion, setAdhesion] = useState(false);
  const [nombreDefecto, setNombreDefecto] = useState("");
  const [rfce, setRfce] = useState("");
  const [representante, setRepresentante] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const { montoEmpresa, setMontoEmpresa, vieneSimuladorEmpresa } =
    simuladorEmpresaStore();

  const router = useRouter();

  const handleClick = () => {
    setCheckbox(!checkbox);
  };

  const handleClickTerminos = () => {
    setTerminos(!terminos);
  };

  const handleClickRevision = () => {
    setRevision(!revision);
  };

  const handleClickAdhesion = () => {
    setAdhesion(!adhesion);
  };

  useEffect(() => {
    const cargarDatos = async () => {
      const user = await getUser();
      setNombreDefecto(user.nombreEmpresa);
      setRfce(user.rfcEmpresa);
      setRepresentante(user.representante);
      setCorreo(user.email);
      setTelefono(user.telefono);
    };
    cargarDatos();
  }, []);

  const handleNext = () => {
    if (!isValid) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/mi-cuenta/empresa/credito-con-garantia-empresa");
      reset();
    }, 20000);
  };

  return (
    <>
      {loading && <Loading />}
      <div>
        <h3 className="text-2xl text-center mb-3 text-[#09ce89] poppins-semibold	">
          Solicita tu Crédito PyME (Desde $1 millón hasta $200 millones de
          pesos)
        </h3>
        <p className="text-center mb-8 text-gray-600">
          Completa la solicitud empresarial en línea
        </p>

        <form onSubmit={handleSubmit(handleNext)}>
          <div className="mb-7">
            <label
              htmlFor="nombre"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Nombre comercial de la empresa
            </label>
            <input
              type="text"
              name="empresa"
              id="empresa"
              autoComplete="off"
              defaultValue={nombreDefecto}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="fiscal"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Representante legal
            </label>
            <input
              type="text"
              name="legal"
              id="legal"
              defaultValue={representante}
              autoComplete="off"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="curplegal"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              RFC del representante legal
            </label>
            <input
              type="text"
              name="curplegal"
              id="curplegal"
              {...register("curplegal", {
                required: true,
              })}
              autoComplete="off"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="razon"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Razón social
            </label>
            <input
              type="text"
              name="razon"
              id="razon"
              autoComplete="off"
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
              {...register("razon", {
                required: true,
              })}
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="rfce"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              RFC de la empresa
            </label>
            <input
              type="text"
              name="rfce"
              id="rfce"
              autoComplete="off"
              defaultValue={rfce}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="constitucion"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Fecha de constitución
            </label>
            <input
              type="date"
              name="constitucion"
              id="constitucion"
              autoComplete="off"
              {...register("constitucion", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-7">
            <label
              htmlFor="fiscal"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Domicilio fiscal completo
            </label>
            <input
              type="text"
              name="fiscal"
              id="fiscal"
              autoComplete="off"
              {...register("fiscal", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
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
              autoComplete="off"
              defaultValue={correo}
              readOnly
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="telefono"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              autoComplete="off"
              defaultValue={telefono}
              readOnly
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="telrepre"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Teléfono de contacto del representante
            </label>
            <input
              type="tel"
              name="telrepre"
              id="telrepre"
              maxLength={10}
              autoComplete="off"
              {...register("telrepre", {
                required: true,
                minLength: 10,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="ingresosm"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Ingresos mensuales promedio
            </label>
            <input
              type="tel"
              name="ingresosm"
              id="ingresosm"
              autoComplete="off"
              {...register("ingresosm", {
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
              Monto solicitado
            </label>
            <input
              type="text"
              name="monto"
              id="monto"
              autoComplete="off"
              value={montoEmpresa}
              {...register("monto", {
                required: true,
                onChange: (e) => setMontoEmpresa(Number(e.target.value)),
                validate: (value) =>
                  vieneSimuladorEmpresa ||
                  (value >= 1000000 && value <= 200000000),
              })}
              readOnly={vieneSimuladorEmpresa}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

          <div className="mb-7">
            <label
              htmlFor="acta"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Últimos 3 estados de cuenta bancarios
            </label>
            <input
              type="file"
              name="estadoCuentaUno"
              id="estadoCuentaUno"
              autoComplete="off"
              {...register("estadoCuentaUno", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm mb-4"
            />
            <input
              type="file"
              name="estadoCuentaDos"
              id="estadoCuentaDos"
              autoComplete="off"
              {...register("estadoCuentaDos", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm mb-4"
            />
            <input
              type="file"
              name="estadoCuentaTres"
              id="estadoCuentaTres"
              autoComplete="off"
              {...register("estadoCuentaTres", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>

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
              autoComplete="off"
              {...register("acta", {
                required: true,
              })}
              className="w-full outline-1 outline-gray-300 px-3 py-[0.625rem] rounded-md text-sm"
            />
          </div>
          <div className="mb-7">
            <label
              htmlFor="idenlegal"
              className="text-[0.93rem] text-gray-600 mb-2 block"
            >
              Identificación del representante legal
            </label>
            <input
              type="file"
              name="idenlegal"
              id="idenlegal"
              autoComplete="off"
              {...register("idenlegal", {
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
              para consultar mi historial crediticio y el de mi empresa ante{" "}
              <span className="text-[#09ce89] manrope-semibold">
                {" "}
                Buró de Crédito y Círculo de Crédito
              </span>{" "}
              con fines de evaluación financiera.
            </label>
          </div>
          <div className="mb-4 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="revision"
              onClick={handleClickRevision}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                revision
                  ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]"
                  : ""
              } `}
              id="revision"
              {...register("revision", {
                required: true,
              })}
            />
            <label
              htmlFor="revision"
              className="text-[13px] text-gray-500 ml-4"
            >
              Autorizo la{" "}
              <span className="manrope-semibold text-[#09ce89]">
                revisión de historial
              </span>{" "}
              crediticio empresarial
            </label>
          </div>
          <div className="mb-4 grid grid-cols-[auto_1fr]">
            <input
              type="checkbox"
              name="adhesion"
              onClick={handleClickAdhesion}
              className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer mt-1 ${
                adhesion
                  ? "bg-[#09ce89] after:opacity-100 border-[#09ce89]"
                  : ""
              } `}
              id="adhesion"
              {...register("adhesion", {
                required: true,
              })}
            />
            <label
              htmlFor="adhesion"
              className="text-[13px] text-gray-500 ml-4"
            >
              Acepto el{" "}
              <span className="manrope-semibold text-[#09ce89]">
                contrato de adhesión
              </span>
            </label>
          </div>

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
            Iniciar solicitud
          </button>
        </form>
      </div>
    </>
  );
}
