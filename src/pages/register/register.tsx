import toast from "react-hot-toast";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLoaderData } from "react-router-dom";
import InputArtisans from "../../components/input/inputArtisans";
import FormikDatePicker from "../../components/input/formikDatePicker";
import { Button } from "react-bootstrap";
import FormikSelect from "../../components/input/formikSelect/formikSelect";
import { CommuneType } from "../../types/bien";
import { ProfilType } from "../../types/profils";
import { getCommunes } from "../../services/bienServices";
import { getAllProfils } from "../../services/profilsServices";
import styles from "./register.module.scss";
import { AddUser } from "../../types/user";
import { addUser } from "../../services/userServices";
import { AxiosError } from "axios";
import {
  CommuneAuthModuleType,
  getCommunesAuthModule,
} from "../../services/authModuleCommunesServices";
import { format } from "date-fns";

const Register = () => {
  const { profils, communes } = useLoaderData() as RegisterLoaderProps;
  const registerValidationSchema = Yup.object().shape({
    nom: Yup.string().required("Le prénom est obligatoire"),
    password: Yup.string().required("le mot de passe est requis"),
    repeatPassword: Yup.string()
      .required("renseigner le mot de passe de nouveau")
      .oneOf([Yup.ref("password"), ""], "saisir le même mot de passe"),
    prenom: Yup.string().required("Le prénom est obligatoire"),
    email: Yup.string().email("invalide email").required("l'email est requis"),
    profil: Yup.mixed(),
    telephone: Yup.string()
      .matches(
        /^(221|00221|\+221)?(77|78|75|70|76)[0-9]{7}$/,
        "Numéro de téléphone invalide"
      )
      .required("le télèphone est requis"),
    adresse: Yup.string().required("l'adresse est obligatoire"),
    CNI: Yup.string().required(
      "Le numero de la carte d'identité est obligatoire "
    ),
    codeZip: Yup.string(),
    date_of_birth: Yup.date(),
    place_of_birth: Yup.string().required(
      "le lieu de naissance est obligatoire"
    ),
    nationalite: Yup.string(),
    dateExpiration: Yup.date(),
    dateEmission: Yup.date(),
    lieuEmission: Yup.string(),
    commune: Yup.mixed(),
    nom_structure: Yup.string().required(
      "le nom de la structure est obligatoire"
    ),
  });
  return (
    <section className={styles.registerSection}>
      <Formik
        initialValues={{
          nom: "",
          password: "",
          repeatPassword: "",
          prenom: "",
          email: "",
          profil: profils[0].id,
          telephone: "",
          adresse: "",
          CNI: "",
          codeZip: "",
          date_of_birth: new Date("2001-02-03"),
          place_of_birth: "",
          nationalite: "",
          dateExpiration: new Date("2001-02-03"),
          dateEmission: new Date("2001-02-03"),
          lieuEmission: "",
          commune: communes[0].id,
          nom_structure: "",
        }}
        validationSchema={registerValidationSchema}
        validateOnMount
        onSubmit={async (user, onSubmitProps) => {
          const newUser: AddUser = {
            nom: user.nom,
            password: user.password,
            prenom: user.prenom,
            email: user.email,
            profil: user.profil,
            tel: user.telephone,
            adresse: user.adresse,
            CNI: user.CNI,
            codeZip: user.codeZip,
            dateNaissance: format(user.date_of_birth, "yyyy-MM-dd"),
            lieuNaissance: user.place_of_birth,
            nationalite: user.nationalite,
            dateExpiration: format(user.dateExpiration, "yyyy-MM-dd"),
            dateEmission: format(user.dateEmission, "yyyy-MM-dd"),
            lieuEmission: user.lieuEmission,
            commune: user.commune,
            nom_structure: user.nom_structure,
          };
          const response = addUser(newUser);
          toast.promise(response, {
            loading: "Définir comme traitée...",
            success: (r) => <b>Utilisateur inscrit</b>,
            error: (e: AxiosError) => <b>échec: {e.message} </b>,
          });
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div className={styles.registerBox}>
              <header className={styles.registerHeader}>
                <h1>Inscription </h1>
                <div className={styles.brownBar}></div>
              </header>
              <aside className={styles.inputsSection}>
                <InputArtisans
                  background={"#FFFFFF"}
                  label="Nom"
                  name="nom"
                  placeholder="Diallo"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Prénom"
                  name="prenom"
                  placeholder="Demba"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Mot de passe"
                  name="password"
                  placeholder="************"
                  type="password"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Confirmer mot de passe"
                  name="repeatPassword"
                  placeholder="************"
                  type="password"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Email:"
                  name="email"
                  placeholder="bouba@gmail.com"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Téléphone"
                  name="telephone"
                  placeholder="778541236"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Adresse:"
                  name="adresse"
                  placeholder="Mbour,Saly carrefour"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="CNI:"
                  name="CNI"
                  placeholder="Mbour,Saly carrefour"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="code Zip:"
                  name="codeZip"
                  placeholder="Medina/gueule tapé, rue 15 X 30 (13500)"
                />

                <FormikDatePicker
                  label="Date de naissance"
                  name="date_of_birth"
                  placeholder="1997/10/12"
                  dateFormat="yyyy-MM-dd"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Lieu de naissance:"
                  name="place_of_birth"
                  placeholder="Dakar"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Nationalite:"
                  name="nationalite"
                  placeholder="Sénègalaise"
                />

                <FormikDatePicker
                  label="Date d'expiration"
                  name="dateExpiration"
                  placeholder="1997/10/12"
                  dateFormat="yyyy-MM-dd"
                />

                <FormikDatePicker
                  label="Date d'emission"
                  name="dateEmission"
                  placeholder="1997/10/12"
                  dateFormat="yyyy-MM-dd"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Lieu émission:"
                  name="lieuEmission"
                  placeholder="Dieupeul"
                />

                <InputArtisans
                  background={"#FFFFFF"}
                  label="Nom structure:"
                  name="nom_structure"
                  placeholder="Hopital bel air"
                />

                <FormikSelect
                  label="Commune"
                  name="commune"
                  options={[
                    ...communes.map((commune) => {
                      return {
                        id: commune.id,
                        value: commune.id,
                        name: commune.intitule,
                      };
                    }),
                  ]}
                />

                <FormikSelect
                  label="Profil"
                  name="profil"
                  options={[
                    ...profils.map((profil) => {
                      return {
                        id: profil.id,
                        value: profil.id,
                        name: profil.intitule,
                      };
                    }),
                  ]}
                />

                <Button type="submit" disabled={isSubmitting || !isValid}>
                  Ajouter
                </Button>
              </aside>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export interface RegisterLoaderProps {
  communes: CommuneAuthModuleType[];
  profils: ProfilType[];
}

export const registerLoader = async (): Promise<RegisterLoaderProps> => {
  const communes = await getCommunesAuthModule();
  const profils = await getAllProfils();
  return {
    communes,
    profils,
  };
};

export default Register;
