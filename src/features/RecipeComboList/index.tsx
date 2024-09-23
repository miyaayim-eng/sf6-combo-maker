import styles from "./index.module.scss";

import { RecipeComboListItem } from "src/features/RecipeComboListItem/";

export const RecipeComboList = ({ combo, commonData }) => {
  // console.log(combo);

  return (
    <ul className={styles.list}>
      {combo.map((action, index) => {
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
};
