import styles from "./index.module.scss";
import { FC, memo } from "react";

type Props = {
  radioArray: Array<any>;
  inputName: string;
  state: any;
  setState: (state: any) => void;
};

export const FilterRadio: FC<Props> = memo(
  ({ radioArray, inputName, state, setState }) => {
    // ラジオボタンを選択
    const handleRadioSelect = (selectName: any) => {
      setState(selectName);
    };

    return (
      <form className={styles.form}>
        <label key="0" className={styles.label}>
          <input
            type="radio"
            name={inputName}
            value=""
            checked={state === null}
            onChange={() => handleRadioSelect(null)}
            className={styles.input}
          />
          <span className={styles.text}>なし</span>
        </label>
        {radioArray.map((radio: any) => (
          <label key={radio.id} className={styles.label}>
            <input
              type="radio"
              name={inputName}
              value={radio.name}
              checked={state == radio.name}
              onChange={() => handleRadioSelect(radio.name)}
              className={styles.input}
            />
            <span className={styles.text}>{radio.display}</span>
          </label>
        ))}
      </form>
    );
  }
);

FilterRadio.displayName = "FilterRadio";
