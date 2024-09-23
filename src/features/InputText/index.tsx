import styles from "./index.module.scss";

export const InputText = ({ id, value, name, placeholder, onChange }) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type="text"
      className={styles.input}
    />
  );
};
