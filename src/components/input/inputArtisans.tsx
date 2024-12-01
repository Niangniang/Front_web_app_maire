import { Field, ErrorMessage } from "formik";
import TextError from "../textError/textError";
import styles from "./inputartisans.module.scss";

type InputArtisansProps = {
  background: string;
  name: string;
  as?: "input" | "select" | "textarea";
  type?: string;
  label: string;
  placeholder?: string;
  height?: string;
  width?: string;
  disabled?: boolean;
};

function InputArtisans({
  name,
  as,
  type,
  label,
  placeholder,
  background,
  height,
  width,
  disabled = false,
}: InputArtisansProps) {
  return (
    <div className={styles.divInput}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        style={{
          background: background ? background : "white",
          width: width,
          height: height,
        }}
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        className={`${styles.input}`}
        placeholder={placeholder}
        as={as || null}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default InputArtisans;
