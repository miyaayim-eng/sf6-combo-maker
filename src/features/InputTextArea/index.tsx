import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  id: string;
  value: string | number;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const InputTextArea: FC<Props> = memo(
  ({ id, value, name, placeholder, onChange }) => {
    // console.log("value => ", value);

    return (
      <textarea
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.textarea}
      ></textarea>
    );
  }
);

InputTextArea.displayName = "InputTextArea";
