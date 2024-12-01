import ListDemande from "../../components/listDemande/listDemande";
import Statistic from "./../../components/statatistic/statistic";

function Demande() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Statistic />
      <ListDemande />
    </div>
  );
}

export default Demande;
