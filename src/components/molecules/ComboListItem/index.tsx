import styles from "./index.module.scss";

export const ComboListItem = ({ commonData, data, onClickDeleteCombo }) => {
  // console.log("data => ", data);
  // console.log("commonData => ", commonData);
  const actionCategory = data.actionCategory;
  const actionId = data.actionId;

  const actionName = commonData[actionCategory].find((action) => {
    return action.id == actionId;
  })?.name;
  // console.log("commonData[actionCategory] => ", commonData[actionCategory]);
  // console.log("actionName => ", actionName);

  return (
    <li className={styles.container}>
      <div className={styles.orderBox}>
        <button type="button" className={styles.orderButton}>
          ↑
        </button>
        <button type="button" className={styles.orderButton}>
          ↓
        </button>
      </div>
      <p className={styles.name}>{actionName}</p>
      <p>{data.listId}</p>
      <button
        type="button"
        className={styles.button}
        onClick={onClickDeleteCombo}
      >
        削除
      </button>
    </li>
  );
};
