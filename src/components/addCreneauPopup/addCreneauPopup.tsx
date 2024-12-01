import { Button, Modal } from "react-bootstrap";

import { formatDate, formatTime } from "../../utils/functions";
import frLocale from "date-fns/locale/fr"; // Import the French locale
import { AskedPersonType } from "../../types/askedPerson";
import { NewCreneauType } from "../../types/creneau";
import { format } from "date-fns";
import { toast } from "react-hot-toast";

import { addCreneau } from "../../services/creneauService";
import { AxiosError } from "axios";

type addCreneauPropsType = {
  showAddPopup: boolean;
  handleCloseAddPopup: () => void;
  newSlotStart: Date;
  newSlotEnd: Date;
  selectedPerson: AskedPersonType;
};
const AddCreneauPopup = ({
  showAddPopup,
  handleCloseAddPopup,
  newSlotStart,
  newSlotEnd,
  selectedPerson,
}: addCreneauPropsType) => {
  const formattedStartTime = formatTime(newSlotStart);
  const formattedEndTime = formatTime(newSlotEnd);
  const formattedDate = formatDate(newSlotStart, frLocale);
  const handleConfirm = async () => {
    const newCreneau: NewCreneauType = {
      debut: format(newSlotStart, "yyyy-MM-dd'T'HH:mm:ss"),
      fin: format(newSlotEnd, "yyyy-MM-dd'T'HH:mm:ss"),
      disponibilite: true,
      date: format(newSlotStart, "yyyy-MM-dd'T'00:00:00"),
      personneDemande: { id: selectedPerson.id },
    };
    console.log(
      "🚀 ~ file: addCreneauPopup.tsx:33 ~ handleConfirm ~ newCreneau:",
      newCreneau
    );
    const res = addCreneau(newCreneau);
    toast.promise(res, {
      loading: "Enregistrement...",
      success: <b>Creneau Enregistré</b>,
      error: (e) => (
        <b>Echec de l'enregistrement: {e.response?.data.Message} </b>
      ),
    });
    handleCloseAddPopup();
  };
  return (
    <>
      <Modal
        show={showAddPopup}
        onHide={handleCloseAddPopup}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Confirmé vous la création de ce nouveau créneau ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Créneau avec :
            <strong>{` ${selectedPerson.prenom} ${selectedPerson.nom}`}</strong>
          </p>
          <p>{selectedPerson.nomPoste}</p>
          <p>{`${formattedStartTime} - ${formattedEndTime} ${formattedDate}`}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleConfirm}>
            enregistrer
          </Button>
          <Button variant="primary" onClick={handleCloseAddPopup}>
            annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCreneauPopup;
