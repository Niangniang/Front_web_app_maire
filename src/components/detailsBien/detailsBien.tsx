import "./detailsBien.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BienType, EditBienType } from "../../types/bien";
import * as Yup from "yup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Form, Formik } from "formik";
// import FormikSelect from "../formikSelect/formikSelect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormikInput from "../input/formikInput";
import FormikRadioButton from "../formikRadioButton/formikRadioButton";
import { Card } from "react-bootstrap";
import FormikInputFile from "../input/formikInputFile";
import { HiOutlineTrash } from "react-icons/hi";
import { BienLoaderProps } from "../../pages/bien/bien";
import { useLoaderData } from "react-router-dom";
import { deleteBien, editBien } from "../../services/bienServices";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import FormikSelect from "../input/formikSelect/formikSelect";

type PropsType = {
  bien: BienType;
  show: boolean;
  handleClose: () => void;
};

function DetailsBien({ bien, show, handleClose }: PropsType) {
  //   const [key, setKey] = useState<string | null>("localisation");*

  const {
    pays,
    regions,
    departements,
    communes,
    bienUsages,
    bienTypes,
    situationFoncieres,
  } = useLoaderData() as BienLoaderProps;
  console.log("pays", pays);
  console.log("regions", regions);
  console.log("departements", departements);
  console.log("communes", communes);
  console.log("usages", bienUsages);
  console.log("types", bienTypes);
  console.log("foncieres", situationFoncieres);

  //validation schema
  const bienValidationSchema = Yup.object().shape({
    pays: Yup.string().uuid("invalide id").required("pays est obligatoire"),
    region: Yup.string().uuid("invalide id").required("region est obligatoire"),
    departement: Yup.string()
      .uuid("invalide id")
      .required("departement est obligatoire"),
    commune: Yup.string()
      .uuid("invalide id")
      .required("commune est obligatoire"),

    // longitude: Yup.string().required("la longitude est obligatoire"),
    // latitude: Yup.string().required("la latitude est obligatoire"),
    addresse: Yup.string().required("l'adresse est obligatoire"),

    superficie: Yup.number().required("superficie est obligatoire"),
    numeroParcelle: Yup.string().required("numeroParcelle est obligatoire"),
    valeurVenal: Yup.string().required("valeur venal est obligatoire"),
    nicad: Yup.string().required("nicad est obligatoire"),
    usage: Yup.string().uuid("invalide id").required("l'usage est obligatoire"),
    valeurLocative: Yup.string().required("valeur localitve est obligatoire"),
    statut: Yup.string().required("statut est obligatoire"),
    nom: Yup.string().required("nom est obligatoire"),
    type: Yup.string().uuid("invalide id").required("le type est obligatoire"),
    situationFonciere: Yup.string()
      .uuid("invalide id")
      .required("la situation fonciere est obligatoire"),
    deliberation: Yup.mixed().notRequired(),
    permitOccuper: Yup.mixed().notRequired(),
    bail: Yup.mixed().notRequired(),
    lettreAttribution: Yup.mixed().notRequired(),

    // taxe: Yup.number().required("commune est obligatoire"),
  });

  //available status currently in the database
  const bienStatus = [
    { name: "vérifier", id: 1, value: "v" },
    { name: "A vérifier", id: 2, value: "av" },
  ];

  //delete the proprety
  const handleDelete = async () => {
    toast.promise(deleteBien(bien.id), {
      loading: "Suppression...",
      success: <b>Suppression réussit</b>,
      error: (e: AxiosError) => <b>échec de la suppression: {e.message} </b>,
    });
    handleClose();
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Détails Propriété</Modal.Title>
          <Modal.Title className="modalTitle">
            supprimer
            <HiOutlineTrash
              color="red"
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            pays: bien.localisation.commune.departement.region.pays.id,
            region: bien.localisation.commune.departement.region.id,
            departement: bien.localisation.commune.departement.id,
            commune: bien.localisation.commune.id,
            // longitude: "",
            // latitude: "",
            addresse: bien.localisation.addresse,
            superficie: bien.superficie,
            numeroParcelle: bien.numeroParcelle,
            valeurVenal: bien.valeurVenal,
            nicad: bien.nicad,
            usage: bien.usage.id,
            valeurLocative: bien.valeurLocative,
            statut: bien.statut,
            nom: bien.nom,
            type: bien.type.id,
            situationFonciere: bien.situationFonciere.id,
            deliberation: bien.titrePropriete.deliberation,
            permitOccuper: bien.titrePropriete.permitOccuper,
            bail: bien.titrePropriete.bail,
            lettreAttribution: bien.titrePropriete.lettreAttribution,
            // taxe: 0,
          }}
          validationSchema={bienValidationSchema}
          onSubmit={async (editedBien) => {
            const newBien: EditBienType = {
              type: {
                id: editedBien.type,
              },
              situationFonciere: {
                id: editedBien.situationFonciere,
              },
              usage: {
                id: editedBien.usage,
              },
              titrePropriete: {
                id: bien.titrePropriete.id,
                deliberation: editedBien.deliberation,
                permitOccuper: editedBien.permitOccuper,
                bail: editedBien.bail,
                lettreAttribution: editedBien.lettreAttribution,
              },
              localisation: {
                commune: {
                  departement: {
                    region: {
                      pays: {
                        id: editedBien.pays,
                      },
                      id: editedBien.region,
                    },
                    id: editedBien.departement,
                  },
                  id: editedBien.commune,
                },
                id: bien.localisation.id,
                addresse: editedBien.addresse,
                longitude: bien.localisation.longitude,
                latitude: bien.localisation.latitude,
              },
              id: bien.id,
              nom: editedBien.nom,
              proprietaire: bien.proprietaire.id,
              statut: editedBien.statut,
              superficie: editedBien.superficie,
              numeroParcelle: editedBien.numeroParcelle,
              valeurVenal: editedBien.valeurVenal,
              nicad: editedBien.nicad,
              valeurLocative: editedBien.valeurVenal,
              dansCadastre: bien.dansCadastre,
              pourMairie: bien.pourMairie,
            };
            console.log("newBien", newBien);
            try {
              const res = editBien(newBien, bien.id);
              toast.promise(res, {
                loading: "Edition du bien...",
                success: (r) => <b>Bien édité</b>,
                error: (e: AxiosError) => <b>échec: {e.message} </b>,
              });
              console.log("editBien", res);
              handleClose();
            } catch (error) {
              console.log("editBien error", error);
            }
          }}
        >
          {({ setFieldValue, values, isSubmitting, isValid, dirty }) => (
            <Form>
              <Modal.Body className="tab-container">
                <Tabs
                  // activeKey={key || "localisation"}
                  // onSelect={(k) => setKey(k)}
                  id="fill-tab-example "
                  className="mb-3 "
                  fill
                >
                  <Tab eventKey="localisation" title="Localisation">
                    <Container fluid>
                      <Row>
                        <Col>
                          <FormikSelect
                            name="pays"
                            label="Choisir le pays"
                            options={[
                              ...pays.map((p) => {
                                return {
                                  id: p.id,
                                  name: p.intitule,
                                  value: p.id,
                                };
                              }),
                            ]}
                          />
                        </Col>
                        <Col>
                          <FormikSelect
                            name="region"
                            label="Region"
                            options={[
                              ...regions
                                .filter((r) => r.pays.id === values.pays)
                                .map((r) => {
                                  return {
                                    id: r.id,
                                    name: r.intitule,
                                    value: r.id,
                                  };
                                }),
                            ]}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormikSelect
                            name="departement"
                            label="Departement"
                            options={[
                              ...departements
                                .filter((d) => d.region.id === values.region)
                                .map((d) => {
                                  return {
                                    id: d.id,
                                    name: d.intitule,
                                    value: d.id,
                                  };
                                }),
                            ]}
                          />
                        </Col>
                        <Col>
                          <FormikSelect
                            name="commune"
                            label="Commune"
                            options={[
                              ...communes
                                .filter(
                                  (c) => c.departement.id === values.departement
                                )
                                .map((c) => {
                                  return {
                                    id: c.id,
                                    name: c.intutile,
                                    value: c.id,
                                  };
                                }),
                            ]}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormikInput
                            name="addresse"
                            label="Adresse"
                            placeholder="HLM mariste villa n°18"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab
                    eventKey="information_generales"
                    title="Informations générales"
                  >
                    <Container fluid>
                      <Row>
                        <Col>
                          <FormikInput
                            name="superficie"
                            label="Superficie"
                            placeholder="200.00"
                            type="number"
                          />
                        </Col>
                        <Col>
                          <FormikInput
                            name="numeroParcelle"
                            label="Numero Parcelle"
                            placeholder="SC254"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormikInput
                            name="valeurVenal"
                            label="Valeur venal"
                            placeholder="540000000 fcfa"
                          />
                        </Col>
                        <Col>
                          <FormikInput
                            name="nicad"
                            label="NICAD"
                            placeholder="N254MB"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormikSelect
                            name="usage"
                            label="Usage"
                            options={[
                              ...bienUsages.map((bu) => {
                                return {
                                  id: bu.id,
                                  name: bu.nom,
                                  value: bu.id,
                                };
                              }),
                            ]}
                          />
                        </Col>
                        <Col>
                          <FormikInput
                            name="valeurLocative"
                            label="Valeur locative"
                            placeholder="N254MB"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormikRadioButton
                            name="statut"
                            label="Statut"
                            options={bienStatus}
                          />
                        </Col>
                        <Col>
                          <FormikInput
                            name="nom"
                            label="Nom"
                            placeholder="Villa chicha"
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormikSelect
                            name="type"
                            label="Type"
                            options={[
                              ...bienTypes.map((bt) => {
                                return {
                                  id: bt.id,
                                  name: bt.nom,
                                  value: bt.id,
                                };
                              }),
                            ]}
                          />
                        </Col>
                        <Col>
                          <FormikSelect
                            name="situationFonciere"
                            label="Situation Fonciére"
                            options={[
                              ...bienUsages.map((sf) => {
                                return {
                                  id: sf.id,
                                  name: sf.nom,
                                  value: sf.id,
                                };
                              }),
                            ]}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  {/* <Tab eventKey="proprietaire" title="Propriétaire">
                    propriétaire content
                  </Tab> */}
                  <Tab eventKey="joindre_fichiers" title="Joindre fichiers">
                    <Container fluid>
                      <Row xs={1} md={2} className="g-4">
                        <Col>
                          <Card>
                            <Card.Body>
                              <Card.Title>Déliberation</Card.Title>
                              <Card.Link
                                onClick={() =>
                                  window.open(
                                    bien.titrePropriete.deliberation,
                                    "_blank"
                                  )
                                }
                              >
                                preview
                              </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                              {/* <FormikInputFile
                                name="deliberation"
                                label="nouvelle déliberation"
                                setFieldValue={setFieldValue}
                              /> */}
                            </Card.Footer>
                          </Card>
                        </Col>
                        <Col>
                          <Card>
                            <Card.Body>
                              <Card.Title>Permis d'occuper</Card.Title>
                              <Card.Link
                                onClick={() =>
                                  window.open(
                                    bien.titrePropriete.permitOccuper,
                                    "_blank"
                                  )
                                }
                              >
                                preview
                              </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                              {/* <FormikInputFile
                                name="permitOccuper"
                                label="Nouveau permis d'occuper"
                                setFieldValue={setFieldValue}
                              /> */}
                            </Card.Footer>
                          </Card>
                        </Col>
                        <Col>
                          <Card>
                            <Card.Body>
                              <Card.Title>Bail</Card.Title>
                              <Card.Link
                                onClick={() =>
                                  window.open(
                                    bien.titrePropriete.bail,
                                    "_blank"
                                  )
                                }
                              >
                                preview
                              </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                              {/* <FormikInputFile
                                name="bail"
                                label="nouveau Bail"
                                setFieldValue={setFieldValue}
                              /> */}
                            </Card.Footer>
                          </Card>
                        </Col>
                        <Col>
                          <Card>
                            <Card.Body>
                              <Card.Title>Lettre d'attribution</Card.Title>
                              <Card.Link
                                onClick={() =>
                                  window.open(
                                    bien.titrePropriete.lettreAttribution,
                                    "_blank"
                                  )
                                }
                              >
                                preview
                              </Card.Link>
                            </Card.Body>
                            <Card.Footer>
                              {/* <FormikInputFile
                                name="lettreAttribution"
                                label="nouvelle lettre d'attribution"
                                setFieldValue={setFieldValue}
                              /> */}
                            </Card.Footer>
                          </Card>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                </Tabs>
              </Modal.Body>
              <Modal.Footer
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button variant="primary" onClick={handleClose}>
                  Annuler
                </Button>
                <Button
                  variant="danger"
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty}
                >
                  Éditer
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default DetailsBien;
