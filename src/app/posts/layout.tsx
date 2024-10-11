import { ReactNode } from "react";
// import styles from "./layout.module.scss";
// import Link from "next/link";
// import { getLoginUser } from "@/utils/getLoginUser";

export default async function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // const loginUser = await getLoginUser();
  return (
    <>
      {/* {loginUser ? (
        <>{children}</>
      ) : (
        <>
          <p>ログインされていません。</p>
          <p className={styles.buttonBox}>
            <Link href="/login/" className={styles.button}>
              ログイン画面にすすむ
            </Link>
          </p>
        </>
      )} */}
      <>{children}</>
    </>
  );
}
