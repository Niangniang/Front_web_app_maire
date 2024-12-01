import React from "react";
import { Modal } from "react-bootstrap";
import { RDVType } from "../../types/rdv";
import photo_b from "../../assets/photo_b.svg";
import photo_m from "../../assets/photo_maire.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { TbClipboard } from "react-icons/tb";
import "./voirRDV.css";
import { changeEtatDemande } from "../../services/rdvServices";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

type ModalProps = {
  show: boolean;
  onClose: () => void;
  rowData: RDVType;
};

const VoirRDV: React.FC<ModalProps> = ({ show, onClose, rowData }) => {
  const handleCancel = async () => {
    const res = changeEtatDemande(rowData.id, "Annuler");
    toast.promise(res, {
      loading: "Annulation...",
      success: (r) => <b>{r.message}</b>,
      error: (e: AxiosError) => (
        <b>échec de l'annulation du rendez-vous {e.message} </b>
      ),
    });
    onClose();
  };
  const getColorClass = (statut: string) => {
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
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "normal" }}>
          Détails du rendez-vous
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {rowData && (
          <div
            className="modal-body-content"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <div className="custom-fieldset">
              <div className="custom-legend-container">
                <div className="custom-legend">INFORMATION DEMANDEUR</div>
              </div>
              <div
                style={{
                  padding: "10px 12px 12px 12px",
                  borderRadius: "18px",
                  display: "flex",
                  gap: "80px",
                }}
              >
                <img src={photo_b} alt="photo_b" />

                <div>
                  <p>{rowData.user.nom}</p>
                  <p>{rowData.user.prenom}</p>
                  <p>{rowData.user.tel}</p>
                  <p>{rowData.user.email}</p>
                </div>
              </div>
            </div>
            <div className="custom-fieldset">
              <div className="custom-legend-container">
                <div className="custom-legend">
                  INFORMATIIONS DETAIL RENDEZ-VOUS
                </div>
              </div>
              <div className="row" style={{ padding: "10px 12px 12px 12px" }}>
                <label
                  style={{ fontWeight: "bold", marginLeft: "10px" }}
                  htmlFor=""
                >
                  Personne à voir
                </label>
                <hr className="horizontal-line" style={{}}></hr>
                <div
                  className="row"
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "35px",
                    }}
                  >
                    <img src={photo_m} alt="" />
                    <div style={{ marginLeft: "10px" }}>
                      <p style={{ height: "10px" }}>
                        {rowData.creneau.personneDemande.prenom}
                      </p>
                      <p style={{ height: "10px" }}>
                        {rowData.creneau.personneDemande.nom}
                      </p>
                      <p style={{ height: "10px" }}>
                        {rowData.creneau.personneDemande.mail}
                      </p>
                    </div>
                  </div>
                </div>

                <label style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  Date et créneau
                </label>
                <hr className="horizontal-line"></hr>

                <div className="row" style={{ marginTop: "14px" }}>
                  <div className="col col-2">
                    <AiOutlineCalendar size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <p>{rowData.creneau.date}</p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                >
                  <div className="col col-2">
                    <MdOutlineWatchLater size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <label htmlFor="">De</label>
                    <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                      {rowData.creneau.debut}
                    </span>
                    <label htmlFor=""> à </label>
                    <span style={{ marginLeft: "10px" }}>
                      {rowData.creneau.fin}
                    </span>
                  </div>
                </div>

                {/* <span></span> */}
                <label
                  style={{ fontWeight: "bold", marginLeft: "10px" }}
                  htmlFor=""
                >
                  Détails complémentaires
                </label>
                <hr className="horizontal-line" style={{}}></hr>

                <div className="row" style={{ marginTop: "14px" }}>
                  <div className="col col-2">
                    <BsFillDatabaseFill size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <p>{rowData.typeRdv}</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "14px" }}>
                  <div className="col col-2">
                    <MdOutlineWatchLater size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <button
                      className="btn"
                      style={{ background: getColorClass(rowData.etatRdv) }}
                    >
                      {rowData.etatRdv}
                    </button>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "14px" }}>
                  <div className="col col-2">
                    <FiPaperclip size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <p>{rowData.objetRDV.objet}</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "14px" }}>
                  <div className="col col-2">
                    <TbClipboard size={32} color="#923B1D" />
                  </div>
                  <div className="col col-10">
                    <p>{rowData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn "
          style={{ background: "#EB43354D", fontWeight: "bold" }}
          onClick={handleCancel}
        >
          Annuler rendez-vous
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default VoirRDV;
