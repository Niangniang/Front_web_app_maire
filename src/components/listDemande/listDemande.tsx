import { AiOutlineEye } from "react-icons/ai";
import { DemandeType } from "../../types/demande";
import "./listDemande.css";
import { useLoaderData } from "react-router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { BiFilterAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListDemande: React.FC = () => {
  const demandes = useLoaderData() as DemandeType[];
  console.log("🚀 ~ file: listDemande.tsx:13 ~ demandes:", demandes);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<DemandeType | null>(null);

  const showDetails = (row: DemandeType) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const columns = [
    {
      name: "Demandeur",
      selector: (row: DemandeType) => `${row.user?.prenom} ${row.user?.nom}`,
      sortable: true,
    },
    {
      name: "Type de demande",
      selector: (row: DemandeType) => row.typeDemande?.nom,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row: DemandeType) => row.date,
      sortable: true,
    },
    {
      name: "Traitant",
      selector: (row: DemandeType) =>
        `${row.user_traitant?.prenom || "Non"} ${
          row?.user_traitant?.nom || "Assigné"
        }`,
      sortable: true,
    },
    {
      name: "Statut",
      selector: (row: DemandeType) => row.status,
      button: true,
      ignoreRowClick: true,
      cell: (row: DemandeType) => (
        <button
          style={{
            backgroundColor: getStatusColor(row.status),
            width: "100%",
            height: "80%",
            borderRadius: "10px",
            border: "none",
          }}
        >
          {getStatus(row.status)}
        </button>
      ),
    },
    {
      name: "Voir",
      cell: (row: DemandeType) => (
        <Link
          style={{ marginLeft: "20px" }}
          to={`/demandes/${row.id}`}
          state={{
            demande: row,
          }}
        >
          <AiOutlineEye
            size={23} // Taille de l'icône en pixels
            color="#923B1D" // Couleur de l'icône
            onClick={() => showDetails(row)}
          />
        </Link>
      ),
      sortable: true,
    },
  ];

  const getStatus = (statut: string) => {
    switch (statut) {
      case "Attente":
        return "Attente";
      case "Traitement":
        return "Traitement";
      case "Traitee":
        return "Traitee";
      case "Annuler":
        return "Annuler";
      case "EnAttenteClient":
        return "En Attente Client";

      default:
        return "inherit";
    }
  };
  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Attente":
        return "#FBB11D";
      case "Traitement":
        return "#004AC333";
      case "Traitee":
        return "#CDF0D3";
      case "Annuler":
        return "#F8BAB5";
      case "EnAttenteClient":
        return "#FAEB35";

      default:
        return "inherit";
    }
  };

  return (
    <div className="listDemande">
      <div className="div-header row row-cols-2">
        <div className="col col-9">
          <span
            style={{
              fontWeight: "600px",
              fontSize: "18px",
              color: "#000000",
            }}
          >
            Toutes les demandes
          </span>
        </div>
        <div className="col col-3 div-end">
          <span
            className="div-end-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <BiFilterAlt size={18} color="#0F172A" />
            <label htmlFor="">Filtrer</label>
          </span>
          <span
            className="div-end-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <FaSearch size={18} color="#0F172A" />
            <label htmlFor="">Rechercher</label>
          </span>
        </div>
      </div>
      <div className="custom-datatable-container">
        <DataTable<DemandeType>
          columns={columns}
          data={demandes}
          pagination
          className="custom-datatable custom-datatable-container"
        />
      </div>
    </div>
  );
};

export default ListDemande;
