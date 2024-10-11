import styles from "./index.module.scss";
import { FC, memo } from "react";
import { getActionInfo } from "@/utils/getActionInfo";
import { convertDisplayInputInfo } from "@/utils/convertDisplayInputInfo";
import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  combo: any;
  onClickDeleteCombo: (index: number) => void;
};

export const ComboListItem: FC<Props> = memo(
  ({ commonData, combo, onClickDeleteCombo }) => {
    // console.log("combo => ", combo);
    // console.log("commonData => ", commonData);

    const actionInfo = getActionInfo(
      commonData,
      combo.actionCategory,
      combo.actionId
    );
    // console.log("actionInfo => ", actionInfo);
    const commandName = (actionInfo as any)?.display_normal ?? "";
    const commandId = (actionInfo as any)?.command ?? [];

    return (
      <li className={styles.container}>
        {/* <div className={styles.orderBox}>
          <button type="button" className={styles.orderButton}>
            ↑
          </button>
          <button type="button" className={styles.orderButton}>
            ↓
          </button>
        </div> */}
        <p>[{combo.listId}]</p>
        <p className={styles.name}>{commandName}</p>

        <p className={styles.command}>
          {commandId.map((inputId: number, index: number) => {
            const displayInputInfo = convertDisplayInputInfo(
              commonData.inputs,
              inputId
            );
            return (
              <span
                key={index}
                className={`${styles.input} ${displayInputInfo.inputName}`}
              >
                {displayInputInfo.displayInput}
              </span>
            );
          })}
        </p>
        <button
          type="button"
          className={styles.button}
          onClick={() => onClickDeleteCombo(combo.listId)}
        >
          削除
        </button>
      </li>
    );
  }
);

ComboListItem.displayName = "ComboListItem";
