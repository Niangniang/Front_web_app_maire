import axios from "axios";
import { baseUrlGM } from "./settings";
import { ChangeEtatRdvType, RDVType } from "../types/rdv";
import { storeUser } from "./authServices";
import { UUID } from "crypto";

export const getAllRDV = async (): Promise<RDVType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlGM}/rdv/all`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

type EtatRdv = "Effectuer" | "Annuler" | "Pris";

export const changeEtatDemande = async (
  id: UUID,
  etat: EtatRdv
): Promise<ChangeEtatRdvType> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.patch(`${baseUrlGM}/rdv/${id}`, etat, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};
