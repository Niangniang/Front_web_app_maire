import { useLocation } from "react-router-dom";
import { DemandeFileType, DemandeType } from "../../types/demande";
import { HiOutlineFolderDownload } from "react-icons/hi";
import "./detailDemande.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { Button, Card, Form } from "react-bootstrap";
import {
  changeFileStatus,
  changeStatusDemande,
  traiterDemande,
} from "../../services/demandeServices";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { FcFeedback } from "react-icons/fc";
import { storeUser } from "../../services/authServices";
import { useState } from "react";
import FeedBackPopup from "../../components/feedbackPopup/feedbackPopup";
import { FaUserCog } from "react-icons/fa";
const DetailDemande = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const session = storeUser((state) => state.session);
  console.log(
    "🚀 ~ file: detailDemande.tsx:26 ~ DetailDemande ~ session:",
    session
  );

  const location = useLocation();
  const { demande }: { demande: DemandeType } = location.state;

  console.log("demande", demande);
  function renderDate(dateString: string) {
    const date = new Date(dateString);
    return date.toDateString(); // Renvoie la date au format "ddd mmm dd yyyy"
  }

  function renderTime(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0"); // Obtient l'heure avec un format "00"
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Obtient les minutes avec un format "00"
    const seconds = date.getSeconds().toString().padStart(2, "0"); // Obtient les secondes avec un format "00"
    return `${hours} h ${minutes} mn ${seconds}s `;
  }

  const getColorClass = (statut: string) => {
    switch (statut) {
      case "Attente":
        return "#FBB35K";
      case "Traitement":
        return "#FBB11D";
      case "Traitee":
        return "#CDF0D3";
      case "Annuler":
        return "#F8BAB5";
      default:
        return "inherit";
    }
  };
  const handleTerminerTraitement = async () => {
    const res = changeStatusDemande(demande.id, { status: "Traitee" });
    toast.promise(res, {
      loading: "Définir comme traitée...",
      success: (r) => <b>{r.message}</b>,
      error: (e: AxiosError) => <b>échec: {e.message} </b>,
    });
  };

  const handleTraiterDemande = async () => {
    const res = traiterDemande(demande.id, session.user.id);
    toast.promise(res, {
      loading: "Attribution du traitement de la demande...",
      success: (r) => <b>{r.message}</b>,
      error: (e: AxiosError) => <b>échec: {e.message} </b>,
    });
  };
  const handleChangeFileStatus = async (fichier: DemandeFileType) => {
    const newFile: DemandeFileType = {
      file: fichier.file,
      id: fichier.id,
      intitule: fichier.intitule,
      valide: !fichier.valide,
    };
    const res = changeFileStatus(newFile);
    toast.promise(res, {
      loading: "Changement du status du fichier...",
      success: (r) => <b>Status modifié</b>,
      error: (e: AxiosError) => <b>échec: {e.message} </b>,
    });
  };
  return (
    <div>
      <p style={{ marginBottom: "30px" }}>
        Gestion des demandes administratives
      </p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {demande.status == "Attente" ? (
          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={handleTraiterDemande}
          >
            Traiter demande <HiOutlineFolderDownload size={32} />
          </button>
        ) : demande.user_traitant?.id === session.user.id &&
          demande.status != "EnAttenteClient" ? (
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            onClick={handleShow}
          >
            FeedBack <FcFeedback />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="custom-fieldset">
        <div className="custom-legend-container">
          <div className="custom-legend">INFORMATION DEMANDEUR</div>
        </div>
        <div style={{ marginLeft: "40px", fontWeight: "500px" }}>
          <p>{demande.user.nom}</p>
          <p>{demande.user.prenom}</p>
          <p>{demande.tel}</p>
        </div>
      </div>
      <div className="custom-fieldset">
        <div className="custom-legend-container">
          <div className="custom-legend">INFORMATIIONS DETAIL DEMANDE</div>
        </div>
        <div className="row" style={{ padding: "10px 12px 12px 12px" }}>
          <label style={{ fontWeight: "bold", marginLeft: "10px" }} htmlFor="">
            Date et Heure
          </label>
          <hr className="horizontal-line" style={{}}></hr>
          <div className="row" style={{ marginTop: "14px" }}>
            <div className="col col-1">
              <AiOutlineCalendar size={32} color="#923B1D" />
            </div>
            <div className="col col-11">
              <p>{renderDate(demande.date)}</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "14px" }}>
            <div className="col col-1">
              <MdOutlineWatchLater size={32} color="#923B1D" />
            </div>
            <div className="col col-11">
              <p>{renderTime(demande.date)}</p>
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "10px 12px 12px 12px" }}>
          <label style={{ fontWeight: "bold", marginLeft: "10px" }} htmlFor="">
            Détails complémentaires
          </label>
          <hr className="horizontal-line" style={{}}></hr>
          <div className="row" style={{ marginTop: "14px" }}>
            <div className="col col-1">
              <BsFillDatabaseFill size={32} color="#923B1D" />
            </div>
            <div className="col col-11">
              <p>{demande.typeDemande.nom}</p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "14px" }}>
            <div className="col col-1">
              <MdOutlineWatchLater size={32} color="#923B1D" />
            </div>
            <div className="col col-11">
              <button
                className="btn"
                style={{ background: getColorClass(demande.status) }}
              >
                {demande.status}
              </button>
            </div>
          </div>
          <div className="row" style={{ marginTop: "14px" }}>
            <div className="col col-1">
              <FaUserCog size={32} color="#923B1D" />
            </div>
            <div className="col col-11">
              <h4>Traitée par :</h4>
              {demande.user_traitant?.prenom} {demande.user_traitant?.nom}
            </div>
          </div>
        </div>
      </div>
      <div className="custom-fieldset">
        <div className="custom-legend-container">
          <div className="custom-legend">DOCUMENTS ET FICHIERS JOINTS</div>
        </div>
        <div className="row" style={{ padding: "10px 12px 12px 12px" }}>
          <div className="col">
            <p>fichiers</p>
            <div style={{ display: "flex", gap: "10px" }}>
              {demande.fichiers.map((file) => {
                return (
                  <Card
                    // style={{ width: "30rem", background: "#EBEBEB" }}
                    key={file.id}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Header>{file.intitule}</Card.Header>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body onClick={() => window.open(file.file, "_blank")}>
                      {/* <Card.Title>title</Card.Title> */}
                      {/* <Card.Text></Card.Text> */}
                      <iframe
                        src={`${file}`}
                        style={{
                          pointerEvents: "none",
                        }}
                      ></iframe>
                    </Card.Body>
                    <Card.Footer>
                      <Form>
                        <Form.Check // prettier-ignore
                          type="switch"
                          id="custom-switch"
                          label={file.valide ? "Valide" : "invalide"}
                          checked={file.valide}
                          onChange={() => handleChangeFileStatus(file)}
                        />
                      </Form>
                    </Card.Footer>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {demande.status === "Traitement" &&
          demande.user_traitant.id == session.user.id && (
            <Button onClick={handleTerminerTraitement}>
              Terminer le traitement
            </Button>
          )}
      </div>
      <FeedBackPopup show={show} handleClose={handleClose} demande={demande} />
    </div>
  );
};

export default DetailDemande;
