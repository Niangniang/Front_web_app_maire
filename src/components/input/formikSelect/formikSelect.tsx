import { ErrorMessage, Field } from "formik";
import styles from "./inputselect.module.scss";
import TextError from "../../textError/textError";

type OptionsType = {
  [key: string]: any;
};
type FormikSelectProps<T extends OptionsType> = {
  name: string;
  label: string;
  options: T[];
};
const FormikSelect = <T extends OptionsType>({
  label,
  name,
  options,
}: FormikSelectProps<T>) => {
  return (
    <>
      <div className={styles.divSelect}>
        <label htmlFor={name} className={styles.labelSelect}>
          {label}
        </label>
        <Field as="select" id={name} name={name} className={styles.select}>
          {options.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default FormikSelect;
