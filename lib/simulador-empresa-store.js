import { create } from "zustand";
import { persist } from "zustand/middleware";

export const simuladorEmpresaStore = create(
  persist(
    (set) => ({
      montoEmpresa: "",
      mesesEmpresa: 1,
      totalPagarEmpresa: 1200,
      montoMensualEmpresa: 500,
      perfilEmpresa: "s",
      vieneSimuladorEmpresa: false,

      setMontoEmpresa: (valor) => set({ montoEmpresa: valor }),
      setTotalPagarEmpresa: (valor) => set({ totalPagarEmpresa: valor }),
      setMesesEmpresa: (valor) => set({ mesesEmpresa: valor }),
      setMontoMensualEmpresa: (valor) => set({ montoMensualEmpresa: valor }),
      setPerfilEmpresa: (valor) => set({ perfilEmpresa: valor }),
      setVieneSimuladorEmpresa: (valor) =>
        set({ vieneSimuladorEmpresa: valor }),
    }),
    {
      name: "simulador-empresa",
    }
  )
);
