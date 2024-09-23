import styles from "./index.module.scss";

import { RecipeListItem } from "@/features/RecipeListItem/";

export const RecipeList = ({
  commonData,
  recipes,
  loginUserData,
  characterName,
}) => {
  // console.log("recipes => ", recipes);
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => {
        return (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            commonData={commonData}
            loginUserData={loginUserData}
            characterName={characterName}
          />
        );
      })}
    </ul>
  );
};
