import { FC, memo } from "react";

import Link from "next/link";
import styles from "./index.module.scss";

import { CommonType } from "@/types/commonType";

type Props = {
  category: CommonType["recipe"]["category"];
  characterName: CommonType["characterName"];
};

export const RecipeCategory: FC<Props> = memo(({ category, characterName }) => {
  const categoryName = category;
  const href = {
    pathname: `/character/${characterName}/`,
    query: { category: categoryName },
  };

  return (
    <p>
      <Link href={href} className={styles.link}>
        {categoryName}
      </Link>
    </p>
  );
});

RecipeCategory.displayName = "RecipeCategory";
