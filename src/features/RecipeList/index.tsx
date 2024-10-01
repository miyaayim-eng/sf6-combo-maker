import { FC, memo } from "react";
import styles from "./index.module.scss";

import { RecipeListItem } from "@/features/RecipeListItem/";

import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  recipes: CommonType["recipes"];
  characterName: CommonType["characterName"];
};

export const RecipeList: FC<Props> = memo(
  ({ commonData, recipes, characterName }) => {
    // console.log("recipes => ", recipes);
    return (
      <ul className={styles.list}>
        {recipes.map((recipe) => {
          return (
            <RecipeListItem
              key={recipe.id}
              recipe={recipe}
              commonData={commonData}
              characterName={characterName}
            />
          );
        })}
      </ul>
    );
  }
);

RecipeList.displayName = "RecipeList";
