import styles from "./index.module.scss";

export const InputCheckboxes = ({ name, onChange, checkboxes }) => {
  return (
    <div className={styles.checkboxes}>
      {checkboxes.map((checkbox) => (
        <label key={checkbox.id} className={styles.label}>
          <input
            type="checkbox"
            name={name}
            value={checkbox.name}
            onChange={onChange}
            className={styles.input}
          />
          {checkbox.name}
        </label>
      ))}
    </div>
  );
};
