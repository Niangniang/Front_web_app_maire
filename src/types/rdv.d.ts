import { UUID } from "crypto";

export interface RDVType {
  id: UUID;
  date: string;
  description: string;
  age: number;
  secteurAtivites: string;
  typeRdv: string;
  etatRdv: string;
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
  objetRDV: {
    id: UUID;
    objet: string;
  };
  creneau: {
    id: UUID;
    debut: string;
    fin: string;
    disponibilite: boolean;
    date: string;
    personneDemande: {
      id: UUID;
      prenom: string;
      nom: string;
      nomPoste: string;
      mail: string;
    };
  };
}


export interface ChangeEtatRdvType extends RDVType {
  message: string;
}
