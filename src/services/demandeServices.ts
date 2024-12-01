import axios from "axios";
import { baseUrlGM } from "./settings";
import { RDVType } from "../types/rdv";
import { storeUser } from "./authServices";
import { UUID } from "crypto";
import { ChangeStatusDemande, DemandeFileType } from "../types/demande";

export const getAllDemandes = async (): Promise<RDVType[]> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.get(`${baseUrlGM}/demande/all`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

type StatusDemande = {
  status: "Traitement" | "Traitee" | "Attente" | "Annuler";
};

export const changeStatusDemande = async (
  id: UUID,
  status: StatusDemande
): Promise<ChangeStatusDemande> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.patch(
    `${baseUrlGM}/demande/changeEtatDemande/${id}`,
    status,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  return data;
};

export const traiterDemande = async (
  demandeId: UUID,
  backOfficeId: UUID
): Promise<ChangeStatusDemande> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.patch(
    `${baseUrlGM}/demande/changeEtatDemandeEnTraitement/${demandeId}`,
    { traitant: backOfficeId },
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
  );
  return data;
};

export const sendFeedBack = async (
  feedback: NewFeedbackType
): Promise<AddFeedBackResponseType> => {
  console.log("sendFeedBack");
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.post(`${baseUrlGM}/Feedback/add`, feedback, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};

export const changeFileStatus = async (
  file: DemandeFileType
): Promise<ChangeStatusDemande> => {
  const jwtToken = storeUser.getState().session?.access;
  const { data } = await axios.put(`${baseUrlGM}/fichier/update`, file, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
  return data;
};
