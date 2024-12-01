"use client";
import { useState } from "react";
import styles from "./togglebutton.module.scss";
type ToggleButtonProps = {
  label?: string;
  toggled: boolean;
};
export const ToggleButton = ({ label, toggled }: ToggleButtonProps) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
  };

  return (
    <label className={styles.myLabel}>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span />
      <strong>{label}</strong>
    </label>
  );
};
