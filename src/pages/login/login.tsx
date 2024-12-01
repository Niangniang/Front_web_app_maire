import styles from "./login.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import { storeUser } from "../../services/authServices";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import FormikInput from "../../components/input/formikInput";
const Login = () => {
  const login = storeUser((state) => state.login);
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("invalide email").required("l'email est requis"),
    password: Yup.string().required("le mot de passe est requis"),
  });
  return (
    <div>
      <div className={styles.loginPage}>
        <div className={styles.loginBox}>
          <header className={styles.loginHeader}>
            <h4>Connection</h4>
            <div className={styles.brownBar}></div>
          </header>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            validateOnMount
            onSubmit={async (credentials) => {
              const res = login(credentials);
              toast.promise(res, {
                loading: "Connection...",
                success: (session) => (
                  <b>
                    Bienvenue {session.user.prenom} {session.user.nom}
                  </b>
                ),
                error: (e: AxiosError) => (
                  <b>Connection à échoué {e.message} </b>
                ),
              });

              console.log("after login");
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form className={`${styles.myForm}`}>
                <FormikInput
                  name="email"
                  type="text"
                  placeholder="booster@gmail.com"
                  label="Email"
                />
                <FormikInput
                  placeholder="********"
                  name="password"
                  type="password"
                  label="Mot de passe"
                />
                <Link to="/changePassword" className={styles.changePassword}>
                  Mot de passe oublié ?
                </Link>
                <div>
                  <button
                    className={
                      isSubmitting || !isValid
                        ? styles.disabledButton
                        : styles.simpleButton
                    }
                    disabled={isSubmitting || !isValid}
                    type="submit"
                  >
                    Se connecter
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
