import { Button, Modal } from "react-bootstrap";
import { FormatedCreneau } from "../../pages/creneau/creneau";
import { formatDate, formatTime } from "../../utils/functions";
import frLocale from "date-fns/locale/fr"; // Import the French locale
import { deleteCreneau } from "../../services/creneauService";
import { toast } from "react-hot-toast";
type ShowCreneauPropsType = {
  show: boolean;
  handleClose: () => void;
  selectedCreneau: FormatedCreneau;
};
const ShowCreneauPopup = ({
  show,
  handleClose,
  selectedCreneau,
}: ShowCreneauPropsType) => {
  const formattedStartTime = formatTime(selectedCreneau.start);
  const formattedEndTime = formatTime(selectedCreneau.end);
  const formattedDate = formatDate(selectedCreneau.date, frLocale);
  const handleDelete = async () => {
    toast.promise(deleteCreneau(selectedCreneau.id), {
      loading: "Suppréssion...",
      success: <b>Creneau Supprimé</b>,
      error: (e) => <b>Echec de la suppression </b>,
    });
    console.log("selected creneau", selectedCreneau);
    handleClose();
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>Creneau {}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <p>
            Créneau avec :
            <strong>
              {` ${selectedCreneau.personneDemande.prenom} ${selectedCreneau.personneDemande.nom}`}
            </strong>
          </p>
          <p>{selectedCreneau.personneDemande.nomPoste}</p>
          <p>{`${formattedStartTime} - ${formattedEndTime} ${formattedDate}`}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Supprimer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowCreneauPopup;
