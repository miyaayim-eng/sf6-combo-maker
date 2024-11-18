import { FC, memo } from "react";
import { convertDisplayInputInfo } from "@/utils/convertDisplayInputInfo";
import { getActionInfo } from "@/utils/getActionInfo";
import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  action: any;
  commonData: CommonType["commonData"];
};

export const RecipeCommand: FC<Props> = memo(({ action, commonData }) => {
  const actionCategory = action.actionCategory;
  const actionId = action.actionId;

  const actionInfo = getActionInfo(commonData, actionCategory, actionId);
  const commandName = (actionInfo as any)?.display_normal ?? "";
  const commandId = (actionInfo as any)?.command ?? [];
  const textBefore = (actionInfo as any)?.comment_before ?? "";
  // const textAfter = (actionInfo as any)?.comment_after ?? "";

  return (
    <div className={styles.box}>
      <p className={styles.command}>
        {textBefore && <span className={styles.textBefore}>{textBefore}</span>}
        <span className={styles.inputBox}>
          {commandId.map((inputId: number, index: number) => {
            const displayInputInfo = convertDisplayInputInfo(
              commonData.inputs,
              inputId
            );
            return (
              <span
                key={index}
                className={`${styles.input} ${
                  styles[displayInputInfo.inputName ?? "default"]
                }`}
              >
                {displayInputInfo.displayInput}
              </span>
            );
          })}
        </span>
      </p>
      <p className={styles.name}>{commandName}</p>
    </div>
  );
});

RecipeCommand.displayName = "RecipeCommand";
