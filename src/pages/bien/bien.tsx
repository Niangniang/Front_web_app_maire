import ListBien from "../../components/listBien/listBien";
import {
  getBienTypes,
  getBienUsages,
  getBiens,
  getCommunes,
  getDepartements,
  getPays,
  getRegions,
  getSituationFoncieres,
} from "../../services/bienServices";
import {
  BienType,
  BienTypeType,
  BienUsageType,
  CommuneType,
  DepartementType,
  PaysType,
  RegionType,
  SituationFonciereType,
} from "../../types/bien";

const Bien = () => {
  return <ListBien />;
};

export interface BienLoaderProps {
  biens: BienType[];
  pays: PaysType[];
  regions: RegionType[];
  departements: DepartementType[];
  communes: CommuneType[];
  bienUsages: BienUsageType[];
  bienTypes: BienTypeType[];
  situationFoncieres: SituationFonciereType[];
}

export const bienLoader = async (): Promise<BienLoaderProps> => {
  const biens = await getBiens();
  const pays = await getPays();
  const regions = await getRegions();
  const departements = await getDepartements();
  const communes = await getCommunes();
  const bienUsages = await getBienUsages();
  const bienTypes = await getBienTypes();
  const situationFoncieres = await getSituationFoncieres();
  return {
    biens,
    pays,
    regions,
    departements,
    communes,
    bienUsages,
    bienTypes,
    situationFoncieres,
  };
};

export default Bien;
