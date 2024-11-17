"use client";

import { FC } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

type Props = {
  onClick: any;
};

export const HeaderLoginButton: FC<Props> = ({ onClick }) => {
  const user = useRecoilValue(userState);
  const [isHydrated, setIsHydrated] = useState(false);

  // クライアントサイドでのみレンダリングするためのフラグを設定
  useEffect(() => {
    setIsHydrated(true);
  }, [user]);

  // サーバーサイドでの不一致を防ぐため、クライアントサイドのみで表示
  if (!isHydrated) {
    return null;
  }

  if (user.bool) {
    return (
      <Link href="/user/" className={styles.nav__link} onClick={onClick}>
        {user.name}さん
      </Link>
    );
  } else {
    return (
      <Link href="/login/" className={styles.nav__link} onClick={onClick}>
        ログイン
      </Link>
    );
  }
};
