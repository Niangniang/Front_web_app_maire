import "./listBien.css";
import DataTable from "react-data-table-component";
import { GrFormSearch } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import { BienType } from "../../types/bien";
import DetailsBien from "../detailsBien/detailsBien";
import { useState } from "react";
import { BienLoaderProps } from "./../../pages/bien/bien";

const ListBien: React.FC = () => {
  // const navigate = useNavigate();
  const { biens } = useLoaderData() as BienLoaderProps;
  const [bienRow, setBienRow] = useState<BienType>(biens[0]);
  console.log("biens", biens);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (br: BienType) => {
    setBienRow(br);
    setShow(true);
  };
  const columns = [
    { name: "N° ID ", selector: (row: BienType) => row.id, sortable: true },
    {
      name: "Type de bien",
      selector: (row: BienType) => row.type.nom,
      sortable: true,
    },
    {
      name: "Superficie",
      selector: (row: BienType) => row.superficie,
      sortable: true,
    },
    {
      name: "Adresse",
      selector: (row: BienType) => row.localisation.addresse,
      sortable: true,
    },
    {
      name: "Propriétaire",
      selector: (row: BienType) =>
        `${row.proprietaire.prenom} ${row.proprietaire.nom}`,
      sortable: true,
    },
    {
      name: "Statut",
      selector: (row: BienType) => row.statut,
      cell: (row: BienType) => (
        <span
          style={{
            color: getStatusColor(row.statut),
          }}
        >
          {row.statut}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row: BienType) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            marginRight: "10px",
          }}
        >
          {/* <span className="icon_end">
            <img src={icon_oeil} alt=""/>
          </span> */}
          <span className="icon_end">
            <FiEdit size={18} onClick={() => handleShow(row)} />
          </span>
          {/* <span className="icon_end">
            <img src={icon_delet} alt="" />
          </span> */}
        </div>
      ),
      sortable: true,
    },
  ];

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "Valider":
        return "#09891D";
      case "En attente":
        return "#FBB11D";
      default:
        return "inherit";
    }
  };

  const customStyles = {
    rows: {
      style: {
        border: "1px solid #cbcbcb",
        marginLeft: "1px",
        marginRight: "2px",
        // Style de box-shadow personnalisé
      },
    },
  };

  return (
    <>
      <DetailsBien bien={bienRow} show={show} handleClose={handleClose} />
      <div
        style={{
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
          marginTop: "40px",
          paddingTop: "20px",
        }}
      >
        <span className="title"> Gestion des biens décalarés</span>
        <div className="content">
          <div className="row row-cols-3">
            <div className="col col-6 ">
              <div
                style={{
                  height: "44px",
                  width: "488px",
                  marginLeft: "25px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                }}
              >
                <GrFormSearch size={24} />
                <label htmlFor="">Effectuer une recherche</label>
              </div>
            </div>
            <div className="col col-3 "></div>
          </div>
          <div className="custom-datatable-container">
            <DataTable<BienType>
              columns={columns}
              data={biens}
              pagination
              customStyles={customStyles}
              className="custom-datatable custom-datatable-container"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBien;
