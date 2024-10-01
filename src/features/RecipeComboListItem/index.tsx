// import Image from "next/image";
import { FC, memo } from "react";
import styles from "./index.module.scss";

import { convertDisplayInput } from "@/utils/convertDisplayInput";
import { convertDisplayInputInfo } from "@/utils/convertDisplayInputInfo";
import { getActionInfo } from "@/utils/getActionInfo";

import { CommonType } from "@/types/commonType";

type Props = {
  action: any;
  commonData: CommonType["commonData"];
};

export const RecipeComboListItem: FC<Props> = memo(({ action, commonData }) => {
  const actionCategory = action.actionCategory;
  const actionId = action.actionId;

  // console.log("commonData => ", commonData);
  // console.log("action => ", action);

  const actionInfo = getActionInfo(commonData, actionCategory, actionId);
  // console.log("actionInfo => ", actionInfo);
  const commandName = (actionInfo as any)?.display_normal ?? "";
  const commandId = (actionInfo as any)?.command ?? [];

  // 現在の時刻を取得
  // const renderedTime = new Date().toLocaleTimeString();

  return (
    <li className={styles.item}>
      <div className={styles.inner}>
        <p className={styles.name}>{commandName}</p>
        <p className={styles.command}>
          {commandId.map((inputId: number, index: number) => {
            const displayInput = convertDisplayInput(
              commonData.inputs,
              inputId
            );
            return (
              <span key={index} className={styles.input}>
                {displayInput}
              </span>
            );
          })}
        </p>
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
        {/* <p>レンダリング時刻: {renderedTime}</p> */}
      </div>
    </li>
  );
});

RecipeComboListItem.displayName = "RecipeComboListItem";
