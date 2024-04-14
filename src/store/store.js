import { create } from "zustand";
import { persist } from "zustand/middleware";

//PROBANDO ZUSTAND

export const useToken = create(
  persist(
    (set) => ({
      token: false,
      setToken: () => set((state) => ({ token: !state.token })),
    }),

    {
      name: "Token",
    }
  )
);

export const useModalEmployee = create(
  persist(
    (set) => ({
      show: false,
      setShow: () =>
        set((state) => ({
          show: !state.show,
        })),
      changeShow: (e) =>
        set(() => ({
          show: e,
        })),
    }),

    {
      name: "ModalEmployee",
    }
  )
);
