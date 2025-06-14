import { create } from "zustand";
import { persist } from "zustand/middleware";

export const simuladorPersonalStore = create(
  persist(
    (set) => ({
      montoPersonal: "",
      mesesPersonal: 5,
      totalPagarPersonal: 5000,
      montoMensualPersonal: 400,
      vieneSimulador: false,

      setMontoPersonal: (valor) => set({ montoPersonal: valor }),
      setTotalPagarPersonal: (valor) => set({ totalPagarPersonal: valor }),
      setMesesPersonal: (valor) => set({ mesesPersonal: valor }),
      setMontoMensualPersonal: (valor) => set({ montoMensualPersonal: valor }),
      setVieneSimulador: (valor) => set({ vieneSimulador: valor }),
    }),
    {
      name: "simulador-personal",
    }
  )
);
