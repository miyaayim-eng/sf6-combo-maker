import styles from "./index.module.scss";

export const FilterSelectRadio = ({
  filterName,
  radioArray,
  inputName,
  state,
  setState,
}) => {
  // ラジオボタンを選択
  const handleRadioSelect = (selectName) => {
    setState(selectName);
  };

  return (
    <>
      <div>
        <p className={styles.filterName}>{filterName}</p>
        <form className={styles.form}>
          <label key="0" className={styles.label}>
            <input
              type="radio"
              name={inputName}
              value=""
              checked={state === null}
              onChange={() => handleRadioSelect(null)}
              className={styles.input}
            />
            なし
          </label>
          {radioArray.map((radio) => (
            <label key={radio.id} className={styles.label}>
              <input
                type="radio"
                name={inputName}
                value={radio.name}
                checked={state == radio.name}
                onChange={() => handleRadioSelect(radio.name)}
                className={styles.input}
              />
              {radio.display}
            </label>
          ))}
        </form>
      </div>
    </>
  );
};
