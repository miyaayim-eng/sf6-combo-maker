import styles from "./index.module.scss";
import { FC, memo } from "react";

type Props = {
  filterName: string;
  radioArray: Array<any>;
  inputName: string;
  state: any;
  setState: (state: any) => void;
};

export const FilterSelectRadio: FC<Props> = memo(
  ({ filterName, radioArray, inputName, state, setState }) => {
    // ラジオボタンを選択
    const handleRadioSelect = (selectName: any) => {
      setState(selectName);
    };

    return (
      <>
        <div>
          <p className={styles.filterName}>{filterName}</p>
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
              なし
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
                {radio.display}
              </label>
            ))}
          </form>
        </div>
      </>
    );
  }
);

FilterSelectRadio.displayName = "FilterSelectRadio";
