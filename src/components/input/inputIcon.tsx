import styles from "./inputicon.module.scss";
import { ChangeEvent, ReactNode } from "react";
/* Composant Input props:
value:la valeur en temps reel que contient l'input lorsque l'utilisateur saisie
handleChange: fonction qui permet de faire evoluer le props value en temps reel
name: nom du input necessaire pour le placeholder et le form
type:le type de l'input
classI:la classe (css) de l'input il faut l'importer dans le fichier qui utilise le composnat input
icon:c'est un component de la librairie  react-icons il faut aussi l'importer dans le fichier qui utilise le componant Input 
label:le label de l'input
placeholder:le placeholder de l'input
*/
type InputIconProps = {
  background?: string;
  name: string;
  type?: string;
  icon: ReactNode;
  placeholder?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  step?: string;
  value: string | number;
  disabled?: boolean;
  width: string | number;
};
const InputIcon = ({
  background,
  name,
  type,
  icon,
  placeholder,
  handleChange,
  step,
  value,
  disabled,
  width,
}: InputIconProps) => {
  return (
    <div className={styles.inputIcons}>
      <div className={styles.icon}>{icon}</div>
      <input
        style={{ background: background ? background : "white", width: width }}
        id={name}
        name={name}
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
        onChange={handleChange}
        step={step}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default InputIcon;
