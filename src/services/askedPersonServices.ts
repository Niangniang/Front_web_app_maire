import axios from "axios";
import { AskedPersonType } from "../types/askedPerson";
import { storeUser } from "./authServices";
import { baseUrlGM } from "./settings";

export const getAllAskedPersons = async (): Promise<AskedPersonType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlGM}/personneDemandee/all`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return data;
};
