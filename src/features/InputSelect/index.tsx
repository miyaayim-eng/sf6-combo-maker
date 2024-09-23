import styles from "./index.module.scss";

export const InputSelect = ({
  id,
  value,
  name,
  onChange,
  options,
  useDisplay = true,
}) => {
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
      {options.map((option) => (
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
};
