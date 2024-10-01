import Link from "next/link";
import styles from "./index.module.scss";

import { fetchCharacters } from "@/utils/supabase/fetch";
import { UserButton } from "@/components/layouts/Header/UserButton";

export const Header = async () => {
  const characters = await fetchCharacters();

  return (
    <header>
      <div className={styles.container}>
        <p className={styles.siteName}>
          <Link href="/" className={styles.siteName__link}>
            SF6 Combo Maker
          </Link>
        </p>
        <div className={styles.rightArea}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link href="/" className={styles.nav__link}>
                  Home
                </Link>
              </li>
              {characters.map((character) => {
                return (
                  <li key={character.name} className={styles.nav__item}>
                    <Link
                      href={`/character/${character.name}`}
                      className={styles.nav__link}
                    >
                      {character.display}
                    </Link>
                  </li>
                );
              })}
              <li className={styles.nav__item}>
                <Link href="/posts/new" className={styles.nav__link}>
                  投稿画面
                </Link>
              </li>
              <li className={styles.nav__item}>
                <UserButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// displayName を追加
Header.displayName = "Header";
