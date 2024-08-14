import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

import { RecipeTag } from "@/components/atoms/RecipeTag/";

export const RecipeTags = () => {
  const tags = ["#安定重視", "#ダメージ重視"];

  return (
    <ul className={styles.list}>
      {tags.map((tag) => {
        return <RecipeTag key={tag} tag={tag} />;
      })}
    </ul>
  );
};
