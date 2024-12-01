import { UUID } from "crypto";

interface AskedPersonType {
  id: UUID;
  prenom: string;
  nom: string;
  nomPoste: string;
  mail: string;
  fileUrl: File | null;
}
