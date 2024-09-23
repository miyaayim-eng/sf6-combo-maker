import { getLoginUser } from "@/utils/getLoginUser";

import styles from "./index.module.scss";
import Link from "next/link";

export const User = async () => {
  const loginUserData = await getLoginUser();

  return (
    <>
      <div>
        {loginUserData !== "" ? (
          // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
          <>
            <li suppressHydrationWarning={true} className={styles.nav__item}>
              <Link href="/login/" className={styles.nav__link}>
                {loginUserData.displayName}
              </Link>
            </li>
          </>
        ) : (
          <>
            <li suppressHydrationWarning={true} className={styles.nav__item}>
              <Link href="/login/" className={styles.nav__link}>
                Login
              </Link>
            </li>
          </>
        )}
      </div>
    </>
  );
};
