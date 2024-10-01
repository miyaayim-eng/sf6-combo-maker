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
        {comboList?.map((item: any, index: number) => {
          return (
            <ComboListItem
              key={item.listId}
              commonData={commonData}
              data={item}
              onClickDeleteCombo={() => onClickDeleteCombo(index)}
            />
          );
        })}
      </ol>
    );
  }
);

ComboList.displayName = "ComboList";
