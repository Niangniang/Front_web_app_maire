import { UUID } from "crypto";

export interface CreneauType {
  id: UUID;
  debut: Date;
  fin: Date;
  disponibilite: boolean;
  date: Date;
  personneDemande: {
    id: UUID;
    prenom: string;
    nom: string;
    nomPoste: string;
    mail: string;
  };
}

export interface NewCreneauType {
  debut: string;
  fin: string;
  disponibilite: boolean;
  date: string;
  personneDemande: {
    id: UUID;
  };
}

export interface ResponseNewCreneauType {
  debut: string;
  Message: string;
  fin: string;
  id: string;
}
