import { UUID } from "crypto";

export interface ChangeStatusDemande extends DemandeType {
  message: string;
}

export interface DemandeType {
  id: UUID;
  date: string;
  message: string;
  nom_beneficiaire: string;
  prenom_beneficiaire: string;
  adressse: string;
  tel: string;
  status: "Traitement" | "Traitee" | "Attente" | "Annuler" | "EnAttenteClient";
  typeDemande: {
    id: UUID;
    nom: string;
    nomsFichiersRequis: string[];
  };
  user: UserType;
  fichiers: {
    id: UUID;
    file: string;
    intitule: string;
    valide: boolean;
  }[];
  enfant: {
    id: UUID;
    nom: string;
    prenom: string;
    dateNaissance: string;
    lieuNaissance: string;
    lienParente: string;
  };
  user_traitant: UserType;
  nbrExemplaire: number;
  numerodossier: 299231790203228;
}

type DemandeFileType = {
  id: UUID;
  file: string;
  intitule: string;
  valide: boolean;
};
