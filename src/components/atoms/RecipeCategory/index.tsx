import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

export const RecipeCategory = () => {
  return (
    <p>
      <Link href="#" className={styles.link}>
        カウンター
      </Link>
    </p>
  );
};
