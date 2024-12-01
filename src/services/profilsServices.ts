import axios from "axios";
import { baseUrlAuth } from "./settings";
import { storeUser } from "./authServices";
import { ProfilType } from "../types/profils";

export const getAllProfils = async (): Promise<ProfilType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlAuth}/profils/`, {});
  return data;
};
