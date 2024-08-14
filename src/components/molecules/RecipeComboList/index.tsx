import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

import { RecipeComboListItem } from "src/components/molecules/RecipeComboListItem/";

export const RecipeComboList = ({ combo, actionsData }) => {
  // console.log(combo);

  return (
    <ul className={styles.list}>
      {combo.map((action, index) => {
        return (
          <RecipeComboListItem
            key={index}
            action={action}
            actionsData={actionsData}
          />
        );
      })}
    </ul>
  );
};
