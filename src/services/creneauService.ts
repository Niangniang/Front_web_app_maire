import axios from "axios";
import { baseUrlGM } from "./settings";
import { storeUser } from "./authServices";
import {
  CreneauType,
  NewCreneauType,
  ResponseNewCreneauType,
} from "../types/creneau";
import { UUID } from "crypto";

export const getCreneaux = async (): Promise<CreneauType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlGM}/creneau/all`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return data;
};

export const getCreneau = async (creneauId: UUID): Promise<CreneauType> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlGM}/creneau/${creneauId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return data;
};

export const addCreneau = async (
  newCreneau: NewCreneauType
): Promise<ResponseNewCreneauType> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data }: { data: ResponseNewCreneauType } = await axios.post(
    `${baseUrlGM}/creneau/addv1`,
    newCreneau,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );

  return data;
};

export const deleteCreneau = async (creneauId: UUID): Promise<CreneauType> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.delete(
    `${baseUrlGM}/creneau/delete/${creneauId}`,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );

  return data;
};
