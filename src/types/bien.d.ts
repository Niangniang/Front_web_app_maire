import { UUID } from "crypto";
import { UserType } from "./user";

export interface BienType {
  type: {
    id: UUID;
    nom: string;
    dateInsertion: string;
  };

  situationFonciere: {
    id: UUID;
    nom: string;
    dateInsertion: string;
  };

  usage: {
    id: UUID;
    nom: string;
    dateInsertion: string;
  };

  titrePropriete: {
    id: UUID;
    deliberation: string;
    permitOccuper: string;
    bail: string;
    lettreAttribution: string;
    dateInsertion: string;
  };

  localisation: {
    commune: {
      departement: {
        region: {
          pays: {
            id: UUID;
            intitule: string;
            ISO2: string;
            ISO3: string;
            ISOON: string;
            zone: string;
          };
          id: UUID;
          intitule: string;
          codeRegion: string;
        };
        id: UUID;
        intitule: string;
        codeDepartement: string;
      };
      id: UUID;
      codeCommune: string;
      intutile: string;
    };
    id: UUID;
    addresse: string;
    longitude: number;
    latitude: number;
    dateInsertion: string;
  };
  id: UUID;
  nom: string;
  proprietaire: UserType;
  statut: string;
  superficie: number;
  numeroParcelle: string;
  valeurVenal: string;
  nicad: string;
  valeurLocative: string;
  taxe: string;
  dateInsertion: string;
  miseAJour: string;
  dansCadastre: boolean;
  pourMairie: boolean;
}

export interface EditBienType {
  type: {
    id: UUID;
  };

  situationFonciere: {
    id: UUID;
  };

  usage: {
    id: UUID;
  };

  titrePropriete: {
    id: UUID;
    deliberation: string | File;
    permitOccuper: string | File;
    bail: string | File;
    lettreAttribution: string | File;
  };

  localisation: {
    commune: {
      departement: {
        region: {
          pays: {
            id: UUID;
          };
          id: UUID;
        };
        id: UUID;
      };
      id: UUID;
    };
    id: UUID;
    addresse: string;
    longitude: number;
    latitude: number;
  };
  id: UUID;
  nom: string;
  proprietaire: UUID;
  statut: string;
  superficie: number;
  numeroParcelle: string;
  valeurVenal: string;
  nicad: string;
  valeurLocative: string;
  // taxe: string;
  // dateInsertion: string;
  // miseAJour: string;
  dansCadastre: boolean;
  pourMairie: boolean;
}

export interface AddBienType {
  proprietaire: UUID;
  localisation: {
    commune: {
      departement: {
        region: {
          pays: {
            id: UUID;
          };
          id: UUID;
        };
        id: UUID;
      };
      id: UUID;
    };
    id: UUID;
    // longitude: number;
    // latitude: number;
    addresse: string;
  };

  superficie: number;
  numeroParcelle: string;
  valeurVenal: string;
  nicad: string;
  usage: {
    id: UUID;
  };
  valeurLocative: string;
  statut: string;
  nom: string;
  type: {
    id: UUID;
  };
  situationFonciere: {
    id: UUID;
  };
  titrePropriete: {
    id: UUID;
    deliberation: File | null;
    permitOccuper: File | null;
    bail: File | null;
    lettreAttribution: File | null;
  };

  // taxe: number;
  dateInsertion: string;
  // miseAJour: string;
  dansCadastre: boolean;
  pourMairie: boolean;
}

export interface PaysType {
  id: UUID;
  intitule: string;
  ISO2: string;
  ISO3: string;
  ISOON: string;
  zone: string;
}

export interface AddPaysType {
  intitule: string;
  ISO2: string;
  ISO3: string;
  ISOON: string;
  zone: string;
}

export interface RegionType {
  pays: {
    id: UUID;
    intitule: string;
    ISO2: string;
    ISO3: string;
    ISOON: string;
    zone: string;
  };
  id: UUID;
  intitule: string;
  codeRegion: string;
}

export interface AddRegionType {
  pays: {
    id: UUID;
  };
  intitule: string;
  codeRegion: string;
}

export interface DepartementType {
  id: UUID;
  region: {
    id: UUID;
    pays: {
      id: UUID;
      intitule: string;
      ISO2: string;
      ISO3: string;
      ISOON: string;
      zone: string;
    };
    intitule: string;
    codeRegion: string;
  };
  intitule: string;
  codeDepartement: string;
}

export interface AddDepartementType {
  region: {
    id: UUID;
    pays: {
      id: UUID;
    };
  };
  intitule: string;
  codeDepartement: string;
}

export interface CommuneType {
  id: UUID;
  departement: {
    id: UUID;
    region: {
      id: UUID;
      pays: {
        id: UUID;
        intitule: string;
        ISO2: string;
        ISO3: string;
        ISOON: string;
        zone: string;
      };
      intitule: string;
      codeRegion: string;
    };
    intitule: string;
    codeDepartement: string;
  };
  codeCommune: string;
  intutile: string;
}

export interface AddCommuneType {
  departement: {
    id: UUID;
    region: {
      id: UUID;
      pays: {
        id: UUID;
      };
    };
  };
  codeCommune: string;
  intutile: string;
}

export interface BienUsageType {
  id: UUID;
  nom: string;
  dateInsertion: string;
}

export interface AddBienUsageType {
  nom: string;
}

export interface BienTypeType {
  id: UUID;
  nom: string;
  dateInsertion: string;
}

export interface AddBienTypeType {
  nom: string;
}

export interface SituationFonciereType {
  id: UUID;
  nom: string;
  dateInsertion: string;
}

export interface AddSituationFonciereType {
  nom: string;
}
