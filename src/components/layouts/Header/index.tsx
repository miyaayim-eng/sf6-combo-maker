"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

import { HeaderLoginButton } from "@/features/button/HeaderLoginButton";

export const Header = () => {
  const [state, setState] = useState(false);

  const handleButtonClick = () => {
    // ボタンがクリックされたときにis-activeクラスを追加
    const button = document.querySelector(`.${styles.menuButton__button}`);
    const nav = document.querySelector(`.${styles.nav}`);
    if (!button || !nav) return;
    setState((prevState) => {
      const newState = !prevState; // 新しい状態を計算
      if (newState) {
        button.classList.add("is-active");
        nav.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
        nav.classList.remove("is-active");
      }
      return newState; // 新しい状態を返す
    });
  };

  const handleLinkClick = () => {
    const button = document.querySelector(`.${styles.menuButton__button}`);
    const nav = document.querySelector(`.${styles.nav}`);
    if (!button || !nav) return;
    setState((prevState) => {
      const newState = !prevState; // 新しい状態を計算
      if (newState) {
        button.classList.add("is-active");
        nav.classList.add("is-active");
      } else {
        button.classList.remove("is-active");
        nav.classList.remove("is-active");
      }
      return newState; // 新しい状態を返す
    });
  };

  return (
    <header className={styles.header}>
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
                <Link
                  href="/"
                  className={styles.nav__link}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className={styles.nav__item}>
                <Link
                  href="/posts/new"
                  className={styles.nav__link}
                  onClick={handleLinkClick}
                >
                  レシピ投稿
                </Link>
              </li>
              <li className={styles.nav__item}>
                <HeaderLoginButton onClick={handleLinkClick} />
              </li>
            </ul>
          </nav>
          <div className={styles.menuButton}>
            <button
              type="button"
              onClick={handleButtonClick}
              className={styles.menuButton__button}
            >
              <span className={styles.menuButton__button__line}></span>
              <span className={styles.menuButton__button__line}></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";
