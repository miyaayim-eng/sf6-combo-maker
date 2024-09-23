import Link from "next/link";
import styles from "./index.module.scss";

export const RecipeTag = ({ tag, characterName }) => {
  const tagName = tag;
  const href = {
    pathname: `/character/${characterName}/`,
    query: { tags: tagName },
  };

  return (
    <li>
      <Link href={href} className={styles.link}>
        {tagName}
      </Link>
    </li>
  );
};
