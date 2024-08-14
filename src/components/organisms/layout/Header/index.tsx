import Link from "next/link";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <p className={styles.siteName}>
        <Link href="/" className={styles.siteName__link}>
          SF6 Combo Maker
        </Link>
      </p>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/" className={styles.nav__link}>
              Home
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/posts/list" className={styles.nav__link}>
              投稿レシピリスト
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/posts/new" className={styles.nav__link}>
              投稿画面
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/character/" className={styles.nav__link}>
              Character
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/login/" className={styles.nav__link}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
