import { ErrorMessage, Field, FieldProps } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "../textError/textError";
import styles from "./inputartisans.module.scss";
import fr from "date-fns/locale/fr";
type FormikDatePickerProps = {
  name: string;
  placeholder: string;
  label: string;
  dateFormat: string;
};
const FormikDatePicker = ({
  name,
  placeholder,
  label,
  dateFormat,
}: FormikDatePickerProps) => {
  return (
    <div className={styles.divInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field name={name}>
        {({ field, form, meta }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              dateFormat={dateFormat}
              locale={fr}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormikDatePicker;
