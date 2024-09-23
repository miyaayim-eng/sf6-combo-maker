import styles from "./index.module.scss";

export const InputRadios = ({ name, onChange, radios, currentRadio }) => {
  return (
    <div className={styles.radios}>
      {radios.map((radio) => {
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
};
