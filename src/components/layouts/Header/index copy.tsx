import { memo, FC } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

import { fetchCharacters } from "@/utils/supabase/fetch";
import { getLoginUser } from "@/utils/getLoginUser";

export const Header: FC = memo(async () => {
  const loginUserData = await getLoginUser();
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
              {/* <li className={styles.nav__item}>
                <Link href="/" className={styles.nav__link}>
                  Home
                </Link>
              </li> */}
              {/* <li className={styles.nav__item}>
                <Link href="/posts/new" className={styles.nav__link}>
                  投稿画面
                </Link>
              </li> */}
              {/* <li className={styles.nav__item}>
                <Link href="/character/" className={styles.nav__link}>
                  Character
                </Link>
              </li> */}
              {loginUserData ? (
                // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
                <>
                  <li
                    suppressHydrationWarning={true}
                    className={styles.nav__item}
                  >
                    <Link href="/user/" className={styles.nav__link}>
                      {loginUserData.displayName}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    suppressHydrationWarning={true}
                    className={styles.nav__item}
                  >
                    <Link href="/login/" className={styles.nav__link}>
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
