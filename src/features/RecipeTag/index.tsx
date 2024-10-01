import { FC, memo } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

import { CommonType } from "@/types/commonType";

type Props = {
  tag: CommonType["tag"]["name"];
  characterName: CommonType["characterName"];
};

export const RecipeTag: FC<Props> = memo(({ tag, characterName }) => {
  const href = {
    pathname: `/character/${characterName}/`,
    query: { tags: JSON.stringify(tag) },
  };

  return (
    <li>
      <Link href={href} className={styles.link}>
        {tag}
      </Link>
    </li>
  );
});

RecipeTag.displayName = "RecipeTag";
