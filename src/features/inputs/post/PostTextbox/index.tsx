import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  id: string;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (e: any) => void;
};

export const PostTextbox: FC<Props> = memo(
  ({ id, name, value, placeholder, onChange }) => {
    return (
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.input}
      />
    );
  }
);

PostTextbox.displayName = "PostTextbox";
