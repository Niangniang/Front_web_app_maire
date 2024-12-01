import { UUID } from "crypto";

interface UserType {
  id: UUID;
  nom: string;
  prenom: string;
  email: string;
  profil: {
    id: UUID;
    intitule: string;
  };
  commune: {
    id: UUID;
    intitule: string;
    dateInsertion: string;
  };
  statut: boolean;
  tel: string;
  adresse: string;
  codeZip: string;
  dateNaissance: string;
  lieuNaissance: string;
  nationalite: string;
  dateExpiration: string;
  dateEmission: string;
  lieuEmission: string;
  cni: string;
  _active: boolean;
  commune: UUID;
  nom_structure: string;
  _admin: false;
  attachement: string;
}

interface AddUser {
  nom: string;
  prenom: string;
  password: string;
  email: email;
  profil: uuid;
  // statut?: boolean;
  tel?: string;
  adresse?: string;
  CNI?: string;
  codeZip?: string;
  dateNaissance?: date;
  lieuNaissance?: string;
  nationalite?: string;
  dateExpiration?: date;
  dateEmission?: date;
  lieuEmission?: string;
  commune: UUID;
  nom_structure: string;
  attachement?: File;
}
