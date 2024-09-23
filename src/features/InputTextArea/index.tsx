import styles from "./index.module.scss";

export const InputTextArea = ({ id, value, name, placeholder, onChange }) => {
  // console.log("value => ", value);

  return (
    <textarea
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.textarea}
    ></textarea>
  );
};
