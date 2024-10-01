import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  id: string;
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any;
  useDisplay?: boolean;
};

export const InputSelect: FC<Props> = memo(
  ({ id, value, name, onChange, options, useDisplay = true }) => {
    return (
      <select
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        className={styles.select}
      >
        <option value="" disabled className={styles.option}>
          -- 選択してください --
        </option>
        {options.map((option: any) => (
          <option
            key={option.id}
            value={useDisplay ? option.display : option.name}
            className={styles.option}
          >
            {option.display}
          </option>
        ))}
      </select>
    );
  }
);

InputSelect.displayName = "InputSelect";
