import styles from "./index.module.scss";
import { FC, memo } from "react";
import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  data: any;
  onClickDeleteCombo: (index: number) => void;
};

export const ComboListItem: FC<Props> = memo(
  ({ commonData, data, onClickDeleteCombo }) => {
    // console.log("data => ", data);
    // console.log("commonData => ", commonData);
    const actionCategory = data.actionCategory;
    const actionId = data.actionId;

    const actionName = commonData[
      actionCategory as keyof CommonType["commonData"]
    ].find((action: any) => {
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
          onClick={() => onClickDeleteCombo(data.listId)}
        >
          削除
        </button>
      </li>
    );
  }
);

ComboListItem.displayName = "ComboListItem";
