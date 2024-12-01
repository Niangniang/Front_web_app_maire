import "./listCreneau.css";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import AddCreneau from "../addCreneau/addCreneau";

const horaires = ["08:00", "09:00", "10:00", "11:00", "12:00"]; // Tableau des horaires
const joursSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
]; // Tableau des jours de la semaine

function CustomDataTable() {
  // Génère les colonnes dynamiquement en utilisant les jours de la semaine
  const generateColumns = () => {
    const columns: any = [
      {
        name: "Horaires",
        selector: "horaires",
        sortable: false,
      },
    ];

    joursSemaine.forEach((jour) => {
      columns.push({
        name: jour,
        selector: jour.toLowerCase(),
        sortable: false,
      });
    });

    return columns;
  };

  // Génère les données pour remplir le tableau
  const generateData = () => {
    const data: any = [];

    horaires.forEach((horaire) => {
      const rowData: any = {
        horaires: horaire,
      };

      joursSemaine.forEach((jour) => {
        rowData[jour.toLowerCase()] = (
          <Link to="#">
            <div
              style={{
                boxSizing: "border-box",
                background: "#EBEBEB",
                padding: "21px",
                border: " solid 0.5px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </Link>
        );
      });

      data.push(rowData);
    });

    return data;
  };

  const columns = generateColumns();
  const data = generateData();

  return <DataTable className="custom-table" columns={columns} data={data} />;
}

function CreneauTable() {
  return (
    <div>
      <CustomDataTable />
    </div>
  );
}

export default CreneauTable;
