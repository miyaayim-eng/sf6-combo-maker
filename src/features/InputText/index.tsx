import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  id: string;
  value: string | number;
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
};

export const InputText: FC<Props> = memo(
  ({ id, value, name, placeholder, onChange }) => {
    return (
      <input
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        className={styles.input}
      />
    );
  }
);

InputText.displayName = "InputText";
