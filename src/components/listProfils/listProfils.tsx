import "./listProfils.css";
import { useLoaderData } from "react-router";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { UserType } from "./../../types/profils";
import { BiTrash } from "react-icons/bi";
import AvatarCircle from "../avatarCircle/avatarCircle";

const ListProfils: React.FC = () => {
  const profils = useLoaderData() as UserType[];
  // Filtrer les profils dont l'intitulé est "Particulier"
  const profilsParticuliers = profils.filter(
    (pfl) => pfl.profil.intitule === "Particulier"
  );
  //   console.log(profilsParticuliers);

  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<UserType | null>(null);

  const showDetails = (row: UserType) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const getStatusColorButton = (statut: boolean) => {
    return statut ? "#EBF6EB" : "#FFF0F0";
  };
  const getStatusTextColorButton = (statut: boolean) => {
    return statut ? "#31AA27" : "#F93232";
  };

  const columns = [
    {
      name: "Utilisateur",
      cell: (row: UserType) => (
        <div
          className="user-profile"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <AvatarCircle src={row.attachement} alt={row.nom} />
          <span>
            {row.nom} {row.prenom}
          </span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Adresse domicile",
      selector: (row: UserType) => row.adresse || "Non renseignée",
      sortable: true,
    },
    {
      name: "Adresse Email",
      selector: (row: UserType) => row.email,
      sortable: true,
    },
    {
      name: "Telephone",
      selector: (row: UserType) => row.tel,
      sortable: true,
    },
    {
      name: "Statut",
      selector: (row: UserType) => row.statut,
      button: true,
      ignoreRowClick: true,
      cell: (row: UserType) => (
        <button
          style={{
            backgroundColor: getStatusColorButton(row.statut),
            width: "80%",
            height: "60%",
            borderRadius: "16px",
            border: "none",
            color: getStatusTextColorButton(row.statut),
          }}
        >
          {row.statut ? "True" : "False"}
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (row: UserType) => (
        <Link
          style={{
            marginLeft: "20px",
            color: "inherit",
            textDecoration: "none",
          }}
          to={`/demandes/${row.id}`}
          state={{
            demande: row,
          }}
        >
          <BiTrash
            size={23} // Taille de l'icône en pixels
            color="#BDBCDB" // Couleur de l'icône
            onClick={() => showDetails(row)}
          />
        </Link>
      ),
      sortable: true,
    },
  ];

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

      default:
        return "inherit";
    }
  };

  return (
    <div
      style={{
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
        borderRadius: "16px",
        marginTop: "40px",
        paddingTop: "20px",
      }}
    >
      <span style={{ fontSize: "15px", fontWeight: "bold", marginLeft: "5px" }}>
        Tous les particuliers
      </span>
      <div className="custom-datatable-container">
        <DataTable<UserType>
          columns={columns}
          data={profilsParticuliers}
          pagination
          className="custom-datatable custom-datatable-container"
        />
      </div>
    </div>
  );
};

export default ListProfils;
