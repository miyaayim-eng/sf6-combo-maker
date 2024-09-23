import { memo, FC } from "react";
import styles from "./index.module.scss";

  export const Footer: FC = memo(() => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; 2024 サイト名</p>
    </footer>
  );
};
