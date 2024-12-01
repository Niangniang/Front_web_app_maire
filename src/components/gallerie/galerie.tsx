import "./gallerie.css";
import { HiOutlinePlusCircle } from "react-icons/hi";
import pp_1 from "../../assets/pp_1.svg";
import pp_2 from "../../assets/pp_2.svg";
import pp_3 from "../../assets/pp_3.svg";
import pp_4 from "../../assets/pp_4.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddCreneau from "./../addCreneau/addCreneau";

function Gallerie() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <AddCreneau show={showModal} onClose={() => setShowModal(false)} /> */}

      <div
        style={{
          padding: "10px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Link
            to="/creneaux"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span>Créneaux</span>
          </Link>

          <span onClick={handleClick} style={{ cursor: "pointer" }}>
            <HiOutlinePlusCircle size={24} color="#923B1D" /> Nouveau
          </span>
          {/* 
          {isModalOpen && (
            <AddCreneau show={show}  onClose={handleCloseModal}>
            
              <h2>Ajouter un créneau</h2>

            </AddCreneau>
          )} */}
        </div>
        <div
          className="row row-cols-2"
          style={{
            marginBottom: "22px",
          }}
        >
          <div className="col col-6">
            <img src={pp_1} alt="pp_1" />
          </div>
          <div className="col col-6">
            <img src={pp_2} alt="pp_2" />
          </div>
        </div>
        <div className="row row-cols-2">
          <div className="col col-6">
            <img src={pp_3} alt="pp_3" />
          </div>
          <div className="col col-6">
            <img src={pp_4} alt="pp_4" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Gallerie;
