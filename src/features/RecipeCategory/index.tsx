import Link from "next/link";
import styles from "./index.module.scss";

export const RecipeCategory = ({ category, characterName }) => {
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
};
