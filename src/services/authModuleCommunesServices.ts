import { UUID } from "crypto";
import { baseUrlAuth } from "./settings";
import { storeUser } from "./authServices";
import axios from "axios";

export type CommuneAuthModuleType = {
  id: UUID;
  intitule: string;
  dateInsertion: string;
};

export const getCommunesAuthModule = async (): Promise<
  CommuneAuthModuleType[]
> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlAuth}/communes/`);
  return data;
};
