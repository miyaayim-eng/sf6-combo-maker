import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

import { RecipeInfo } from "@/components/molecules/RecipeInfo/";
import { RecipeCategory } from "@/components/atoms/RecipeCategory/";
import { RecipeTags } from "src/components/molecules/RecipeTags/";
import { RecipeComboList } from "src/components/molecules/RecipeComboList/";

export const RecipeListItem = ({ recipe, actionsData }) => {
  return (
    <li className={styles.example}>
      <div className={styles.info}>
        <RecipeInfo recipe={recipe} />
      </div>
      <div className={styles.category}>
        <RecipeCategory recipe={recipe} />
      </div>
      <div className={styles.tags}>
        <RecipeTags recipe={recipe} />
      </div>
      <div className={styles.combo}>
        <RecipeComboList combo={recipe.combo} actionsData={actionsData} />
      </div>
    </li>
  );
};
