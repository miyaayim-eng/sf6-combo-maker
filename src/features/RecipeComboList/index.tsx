import { FC, memo } from "react";

import styles from "./index.module.scss";

import { RecipeComboListItem } from "src/features/RecipeComboListItem/";

import { CommonType } from "@/types/commonType";

type Props = {
  combo: CommonType["recipeCombo"];
  commonData: CommonType["commonData"];
};

export const RecipeComboList: FC<Props> = memo(({ combo, commonData }) => {
  // console.log(combo);

  return (
    <ul className={styles.list}>
      {combo?.map((action, index) => {
        return (
          <RecipeComboListItem
            key={index}
            action={action}
            commonData={commonData}
          />
        );
      })}
    </ul>
  );
});

RecipeComboList.displayName = "RecipeComboList";
