import { ChangeEvent } from "react";
import styles from "./input.module.scss";
type InputProps = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  value: string | number;
};
export default function Input({
  name,
  type,
  label,
  placeholder,
  handleChange,
  value,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className={`${styles.label}`}>
        {label}
      </label>

      <div className={`${styles.divInput}`}>
        <input
          id={name}
          name={name}
          type={type}
          className={`${styles.input}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
}
