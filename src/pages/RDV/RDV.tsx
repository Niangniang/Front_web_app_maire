import Calendar from "../../components/calendrier/calendrier";
import Gallerie from "../../components/gallerie/galerie";
import ListRDV from "../../components/listRDV/listRDV";

function RDV() {
  const handleDateSelect = (date: Date) => {
    console.log("Selected date:", date);
    // Autres traitements à effectuer avec la date sélectionnée
  };
  return (
    <>
      <div
        className="col col-9 table-content "
        style={{
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        }}
      >
        <ListRDV />
      </div>
      <div className="col col-3 " style={{ marginLeft: "0px" }}>
        <div
          className="row content-calendrier"
          style={{
            width: "300px",
            marginLeft: "5px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            borderRadius: "16px",
            marginBottom: "10px",
          }}
        >
          <Calendar onDateSelect={handleDateSelect} />
        </div>
        <div className="row" style={{ width: "300px", marginLeft: "5px" }}>
          <Gallerie />
        </div>
      </div>
    </>
  );
}

export default RDV;
