import "./listRDV.css";
import DataTable from "react-data-table-component";
import { GrFormSearch } from "react-icons/gr";
import { BiFilterAlt } from "react-icons/bi";
import { useLoaderData } from "react-router";
import { RDVType } from "../../types/rdv";
import { useState } from "react";
import VoirRDV from "../voirRDV/voirRDV";
import { AiOutlineEye } from "react-icons/ai";

const ListRDV: React.FC = () => {
  const rdvs = useLoaderData() as RDVType[];
  console.log("rdvs", rdvs);
  console.log("rdvs[0]", rdvs[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RDVType>(rdvs[0]);

  const showDetails = (row: RDVType) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const columns = [
    {
      name: "Demandeur",
      selector: (row: RDVType) => `${row.user?.prenom} ${row.user?.nom}`,
      sortable: true,
    },
    {
      name: "Autorité à voir",
      selector: (row: RDVType) =>
        `${row.creneau?.personneDemande.prenom} ${row.creneau?.personneDemande.nom}`,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row: RDVType) => row.typeRdv,
      sortable: true,
    },
    { name: "Date", selector: (row: RDVType) => row.date, sortable: true },
    {
      name: "Statut",
      selector: (row: RDVType) => row.etatRdv,
      button: true,
      ignoreRowClick: true,
      cell: (row: RDVType) => (
        <button
          style={{
            backgroundColor: getStatusColor(row.etatRdv),
            width: "80%",
            height: "60%",
            borderRadius: "10px",
            border: "none",
          }}
        >
          {row.etatRdv}
        </button>
      ),
    },
    {
      name: "Voir",
      cell: (row: RDVType) => (
        <span style={{ marginLeft: "20px" }}>
          <AiOutlineEye
            size={23} // Taille de l'icône en pixels
            color="#923B1D" // Couleur de l'icône
            onClick={() => showDetails(row)}
          />
        </span>
      ),
      sortable: true,
    },
  ];

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Effectuer":
        return "#CDF0D3";
      case "Annuler":
        return "#F8BAB5";
      case "Pris":
        return "#FBB11D";
      default:
        return "inherit";
    }
  };

  return (
    <>
      <VoirRDV
        show={showModal}
        onClose={() => setShowModal(false)}
        rowData={selectedRow}
      />
      <div className="">
        <span className="grestion-rv"> Gestion des rendez-vous</span>
        <div className="div-header row row-cols-2">
          <div className="col col-9">
            <span
              style={{
                fontWeight: "600px",
                fontSize: "18px",
                color: "#000000",
              }}
            >
              Rendez-vous confirmés
            </span>
          </div>
          <div className="col col-3 div-end">
            <span className="div-end-item">
              <BiFilterAlt size={20} />
              <label htmlFor="">Filtrer</label>
            </span>
            <span className="div-end-item">
              <GrFormSearch size={24} />
              <label htmlFor="">Rechercher</label>
            </span>
          </div>
        </div>
        <div className="custom-datatable-container">
          <DataTable<RDVType>
            columns={columns}
            data={rdvs}
            pagination
            className="custom-datatable custom-datatable-container"
          />
        </div>
      </div>
    </>
  );
};

export default ListRDV;
