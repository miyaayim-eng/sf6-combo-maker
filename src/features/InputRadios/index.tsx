import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radios: any;
  currentRadio: string;
};

export const InputRadios: FC<Props> = memo(
  ({ name, onChange, radios, currentRadio }) => {
    return (
      <div className={styles.radios}>
        {radios.map((radio: any) => {
          // currentRadio と radio.name が一致するか確認
          const isChecked = currentRadio === radio.name;

          return (
            <label key={radio.id} className={styles.label}>
              <input
                type="radio"
                name={name}
                value={radio.name}
                onChange={onChange}
                className={styles.input}
                checked={isChecked} // 一致する場合に checked を true にする
              />
              {radio.name}
            </label>
          );
        })}
      </div>
    );
  }
);

InputRadios.displayName = "InputRadios";
