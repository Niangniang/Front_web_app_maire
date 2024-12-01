import { Field, ErrorMessage } from "formik";
import TextError from "../textError/textError";
import styles from "./input.module.scss";
type InputProps = {
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  step?: string;
};

const FormikInput = ({ name, type, label, placeholder }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className={`${styles.label}`}>
        {label}
      </label>
      <div className={`${styles.divInput}`}>
        <Field
          id={name}
          name={name}
          type={type}
          className={`${styles.input}`}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormikInput;
