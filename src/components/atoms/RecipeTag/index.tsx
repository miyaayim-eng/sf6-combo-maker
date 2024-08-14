import Link from "next/link";

import styles from "./index.module.scss";

export const RecipeTag = ({ tag }) => {
  return (
    <li>
      <Link href="#" className={styles.link}>
        {tag}
      </Link>
    </li>
  );
};
