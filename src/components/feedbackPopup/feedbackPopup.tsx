import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { sendFeedBack } from "../../services/demandeServices";
import * as Yup from "yup";
import { Form, Formik } from "formik";

import InputArtisans from "../input/inputArtisans";
import { DemandeType } from "../../types/demande";
import { storeUser } from "../../services/authServices";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

function FeedBackPopup({
  show,
  handleClose,
  demande,
}: {
  show: boolean;
  handleClose: () => void;
  demande: DemandeType;
}) {
  const session = storeUser((state) => state.session);
  const sendFeedBackValidationSchema = Yup.object().shape({
    objet: Yup.string().required("L'objet est requis"),
    contenu: Yup.string().required("le contenu est requis"),
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Envoyer un feedback</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{ objet: "", contenu: "" }}
          validationSchema={sendFeedBackValidationSchema}
          validateOnMount
          onSubmit={async (feedback) => {
            const newFeedBack: NewFeedbackType = {
              demande: { id: demande.id },
              expediteur: session.user.id,
              destinataire: demande.user.id,
              objet: feedback.objet,
              contenu: feedback.contenu,
            };
            console.log(
              "🚀 ~ file: feedbackPopup.tsx:51 ~ onSubmit={ ~ newFeedBack:",
              newFeedBack
            );

            const res = sendFeedBack(newFeedBack);
            toast.promise(res, {
              loading: "Envoie du Feedback",
              success: (r) => <b>{r.Message}</b>,
              error: (e: AxiosError) => <b>échec: {e.message} </b>,
            });
            handleClose();
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Modal.Body>
                <InputArtisans
                  label="objet"
                  name="objet"
                  background="#FFFFFF"
                />
                <InputArtisans
                  label="Contenu"
                  name="contenu"
                  background="#FFFFFF"
                  // background="#F9FBFB"
                  height="200px"
                  as="textarea"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Annuler
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  Envoyer
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default FeedBackPopup;
