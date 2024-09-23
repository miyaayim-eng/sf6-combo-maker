import styles from "./index.module.scss";

export const InputCheckboxes = ({
  name,
  onChange,
  checkboxes,
  currentCheckboxes,
}) => {
  // console.log("currentCheckboxes", currentCheckboxes);

  return (
    <div className={styles.checkboxes}>
      {checkboxes.map((checkbox) => {
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
};
