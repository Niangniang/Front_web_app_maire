import { ErrorMessage, Field } from "formik";
import TextError from "../textError/textError";
import styles from "./formikradiobutton.module.scss";
type OptionsType = {
  [key: string]: any;
};
type FormikSelectProps<T extends OptionsType> = {
  name: string;
  label: string;
  options: T[];
};
const FormikRadioButton = <T extends OptionsType>({
  label,
  name,
  options,
}: FormikSelectProps<T>) => {
  return (
    <div className={styles.divInput}>
      <div id="my-radio-group">{label}</div>
      <div
        role="group"
        aria-labelledby="my-radio-group"
        style={{ display: "flex", gap: "20px", marginTop: "10px" }}
      >
        {options.map((option) => {
          return (
            <label id={option.id} key={option.id}>
              <Field type="radio" name={name} value={option.value} />
              {option.name}
            </label>
          );
        })}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormikRadioButton;
