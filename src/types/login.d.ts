import { UUID } from "crypto";

//request login body type
export interface CredentialsType {
  email: string;
  password: string;
}
//response interface after login
export interface ResponseLoginType {
  refresh: string;
  access: string;
  user: {
    id: UUID;
    nom: string;
    prenom: string;
    email: string;
    is_active: boolean;
    is_admin: boolean;
    profil: {
      id: UUID;
      intitule: string;
      dateInsertion: string;
    };
    statut: boolean;
    tel: string;
    adresse: string;
    CNI: string;
    codeZip: string;
    dateNaissance: string;
    lieuNaissance: string;
    nationalite: string;
    dateExpiration: string;
    dateEmission: string;
    lieuEmission: string;
  };
}
