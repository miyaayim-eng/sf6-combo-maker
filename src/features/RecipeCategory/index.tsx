import { FC, memo } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

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
        <FontAwesomeIcon icon={faList} className={`${styles.icon}`} />
        <span className={styles.text}> {categoryName}</span>
      </Link>
    </p>
  );
});

RecipeCategory.displayName = "RecipeCategory";
