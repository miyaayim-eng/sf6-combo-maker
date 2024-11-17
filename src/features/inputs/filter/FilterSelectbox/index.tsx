import styles from "./index.module.scss";
import { FC, memo } from "react";

type Props = {
  options: Array<any>;
  inputName: string;
  state: any;
  setState: (state: any) => void;
};

export const FilterSelectbox: FC<Props> = memo(
  ({ options, inputName, state, setState }) => {
    // ラジオボタンを選択
    const handleSelectChange = (selectName: any) => {
      setState(selectName);
      console.log("selectName => ", selectName);
    };

    return (
      <form className={styles.box}>
        <select
          name={inputName}
          onChange={(e) => handleSelectChange(e.target.value)}
          className={styles.select}
        >
          <option
            key="0"
            value=""
            selected={state === null}
            className={styles.option}
          >
            <span className={styles.text}>-</span>
          </option>
          {options.map((option: any) => (
            <option
              key={option.id}
              value={option.name}
              selected={state == option.name}
              className={styles.option}
            >
              {option.display}
            </option>
          ))}
        </select>
      </form>
    );
  }
);

FilterSelectbox.displayName = "FilterSelectbox";
