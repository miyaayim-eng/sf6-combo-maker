import { FC, memo } from "react";
import { ComboListItem } from "@/features/ComboListItem/";
import { CommonType } from "@/types/commonType";

import styles from "./index.module.scss";

type Props = {
  commonData: CommonType["commonData"];
  comboList: CommonType["recipeCombo"];
  onClickDeleteCombo: (index: number) => void;
};

export const ComboList: FC<Props> = memo(
  ({ commonData, comboList, onClickDeleteCombo }) => {
    return (
      <ol className={styles.list}>
        {comboList?.map((combo: any, index: number) => {
          // console.log("combo => ", combo);

          return (
            <ComboListItem
              key={combo.listId}
              commonData={commonData}
              combo={combo}
              onClickDeleteCombo={() => onClickDeleteCombo(index)}
            />
          );
        })}
      </ol>
    );
  }
);

ComboList.displayName = "ComboList";
