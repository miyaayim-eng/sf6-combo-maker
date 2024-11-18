import { FC, memo } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  tag: CommonType["tag"]["name"];
  characterName: CommonType["characterName"];
};

export const RecipeTag: FC<Props> = memo(({ tag, characterName }) => {
  const href = {
    pathname: `/character/${characterName}/`,
    query: { tags: tag },
  };

  return (
    <li>
      <Link href={href} className={styles.link}>
        <FontAwesomeIcon icon={faTag} className={`${styles.icon}`} />
        <span className={styles.text}>{tag}</span>
      </Link>
    </li>
  );
});

RecipeTag.displayName = "RecipeTag";
