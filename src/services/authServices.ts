import axios from "axios";
import { create } from "zustand";
import { storage } from "./storage.js";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { baseUrlAuth } from "./settings.js";
import { CredentialsType, ResponseLoginType } from "../types/login.js";

// const register = async (user) => {
//   try {
//     await axios.post(`${baseUrlAuth}/Authentification/inscription`, user);
//     return true;
//   } catch (error) {
//     errorToast(error.response.data.message);
//     return false;
//   }
// };

//we log a user and store it in the store

type StoreState = {
  session: ResponseLoginType; // Adjust the type according to your session data structure
  login: (credentials: CredentialsType) => Promise<ResponseLoginType>;
  logout: () => void;
};

export const storeUser = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        session: {} as ResponseLoginType, // Initialize with empty object or adjust as needed
        login: async (credentials) => {
          const { data } = await axios.post(
            `${baseUrlAuth}/api/user/token/`,
            credentials
          );
          set({ session: data });
          return data;
          // set(() => ({ session: {} as ResponseLoginType }));
        },
        logout: async () => set({ session: {} as ResponseLoginType }),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => storage),
      }
    )
  )
);
