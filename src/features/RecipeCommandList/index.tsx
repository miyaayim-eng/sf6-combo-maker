import { FC, memo } from "react";
import { RecipeCommandItem } from "@/features/RecipeCommandItem";
import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  combo: CommonType["recipeCombo"];
  onClick?: any;
  commonData: CommonType["commonData"];
};

export const RecipeCommandList: FC<Props> = memo(
  ({ combo, onClick, commonData }) => {
    return (
      <ul className={styles.list}>
        {combo?.map((action, index) => {
          return (
            <RecipeCommandItem
              key={index}
              action={action}
              onClick={onClick ? () => onClick(index) : undefined} // onClickが存在する場合のみ渡す
              commonData={commonData}
            />
          );
        })}
      </ul>
    );
  }
);

RecipeCommandList.displayName = "RecipeCommandList";
