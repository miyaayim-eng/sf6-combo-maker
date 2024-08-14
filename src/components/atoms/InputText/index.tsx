import styles from "./index.module.scss";

export const InputText = ({ id, value, name, placeholder, type, onChange }) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={styles.input}
    />
  );
};
