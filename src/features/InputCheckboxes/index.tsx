import { FC, memo } from "react";
import styles from "./index.module.scss";

type Props = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxes: any;
  currentCheckboxes: any;
};

export const InputCheckboxes: FC<Props> = memo(
  ({ name, onChange, checkboxes, currentCheckboxes }) => {
    // console.log("currentCheckboxes", currentCheckboxes);

    return (
      <div className={styles.checkboxes}>
        {checkboxes.map((checkbox: any) => {
          // currentCheckboxes 配列に checkbox.name が含まれているか確認
          const isChecked = currentCheckboxes.includes(checkbox.name);

          // console.log("checkbox.name", checkbox.name);

          return (
            <label key={checkbox.id} className={styles.label}>
              <input
                type="checkbox"
                name={name}
                value={checkbox.name}
                onChange={onChange}
                className={styles.input}
                checked={isChecked} // currentCheckboxes に checkbox.name が含まれている場合に checked を true にする
              />
              {checkbox.name}
            </label>
          );
        })}
      </div>
    );
  }
);

InputCheckboxes.displayName = "InputCheckboxes";
