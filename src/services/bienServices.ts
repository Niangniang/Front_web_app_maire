import axios from "axios";
import { baseUrlCIF } from "./settings";
import {
  BienType,
  BienTypeType,
  BienUsageType,
  CommuneType,
  DepartementType,
  EditBienType,
  PaysType,
  RegionType,
  SituationFonciereType,
} from "../types/bien";
import { storeUser } from "./authServices";
import { UUID } from "crypto";

export const getBiens = async (): Promise<BienType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/proprietes/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return data;
};

export const editBien = async (
  bien: EditBienType,
  id: UUID
): Promise<BienType> => {
  //the token required in the request
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.patch(`${baseUrlCIF}/proprietes/${id}/`, bien, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const deleteBien = async (id: UUID) => {
  const jwtToken = storeUser.getState().session?.access;
  await axios.delete(`${baseUrlCIF}/proprietes/${id}/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export const getPays = async (): Promise<PaysType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/pays/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const getRegions = async (): Promise<RegionType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data }: { data: RegionType[] } = await axios.get(
    `${baseUrlCIF}/regions/`,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  return data;
};

export const getDepartements = async (): Promise<DepartementType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/departements/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const getCommunes = async (): Promise<CommuneType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/communes/`);
  return data;
};

export const getBienUsages = async (): Promise<BienUsageType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/proprietesUsages/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const getBienTypes = async (): Promise<BienTypeType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/proprietesTypes/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const getSituationFoncieres = async (): Promise<
  SituationFonciereType[]
> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlCIF}/proprietesSituations/`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

//to simulate asynchronous behavior

// return new Promise((resolve, reject) => {
//   // Simulate asynchronous behavior with a setTimeout
//   setTimeout(() => {
//     // Resolve the Promise after a certain time
//     resolve("Async operation completed");
//     // Or reject the Promise with an error
//     // reject(new Error("Async operation failed"));
//   }, 2000); // Simulate a 2-second delay
// });
