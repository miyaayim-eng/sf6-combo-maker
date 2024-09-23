import styles from "./index.module.scss";

export const FilterSelectCheckbox = ({
  filterName,
  optionsArray,
  inputName,
  selectedValues,
  setSelectedValues,
}) => {
  // チェックボックスの選択状態を変更
  const handleCheckboxChange = (value) => {
    setSelectedValues((prevSelectedValues) => {
      // 選択済みの値のリストを更新
      if (prevSelectedValues.includes(value)) {
        // 値がすでに選択済みの場合は削除
        return prevSelectedValues.filter((item) => item !== value);
      } else {
        // 値が選択されていない場合は追加
        return [...prevSelectedValues, value];
      }
    });
  };

  return (
    <div>
      <p className={styles.filterName}>{filterName}</p>
      <form className={styles.form}>
        {optionsArray.map((option) => (
          <label key={option.id} className={styles.label}>
            <input
              type="checkbox"
              name={inputName}
              value={option.name}
              checked={selectedValues.includes(option.name)}
              onChange={() => handleCheckboxChange(option.name)}
              className={styles.input}
            />
            {option.display}
          </label>
        ))}
      </form>
    </div>
  );
};
