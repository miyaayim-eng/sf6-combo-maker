import styles from "./index.module.scss";

import { RecipeListItem } from "@/components/organisms/RecipeListItem/";

export const RecipeList = ({ actionsData, recipes }) => {
  return (
    <ul className={styles.list}>
      {recipes.map((recipe) => {
        return (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            actionsData={actionsData}
          />
        );
      })}
    </ul>
  );
};
