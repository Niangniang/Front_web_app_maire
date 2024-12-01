import { Field, FieldProps } from "formik";
import styles from "./inputartisans.module.scss";

type FormikInputFileProps = {
  background: string;
  name: string;
  label: string;
  placeholder?: string;
};

function FormikInputFile({
  name,
  label,
  placeholder,
  background,
}: FormikInputFileProps) {
  return (
    <div className={`${styles.divInput}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field name={name}>
        {({ field, form, meta }: FieldProps) => {
          const { setFieldValue } = form;
          return (
            <div>
              <input
                type="file"
                //   {...field}
                
                // name={name}
                placeholder={placeholder}
                style={{ background: background || "white" }}
                onChange={(e) => setFieldValue(name, e.target.files?.[0])}
              />
              {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
}

export default FormikInputFile;
