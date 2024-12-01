import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { RDVType } from "../../types/rdv";

type ModalProps = {
  show: boolean;
  onClose: () => void;
};
const [showModal, setShowModal] = useState(false);
const showDetails = () => {
  setShowModal(true);
};

const AddCreneau: React.FC<ModalProps> = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "normal" }}>
          Ajout d'un créneau
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h1>Ajout d'un créneau</h1>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn "
          style={{ background: "#EB43354D", fontWeight: "bold" }}
          //   onClick={}
        >
          Annuler
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCreneau;
