import styles from "./index.module.scss";

export const InputRadios = ({ name, onChange, radios }) => {
  return (
    <div className={styles.radios}>
      {radios.map((radio) => {
        return (
          <label key={radio.id} className={styles.label}>
            <input
              type="radio"
              name={name}
              value={radio.name}
              onChange={onChange}
              className={styles.input}
            />
            {radio.name}
          </label>
        );
      })}
    </div>
  );
};
