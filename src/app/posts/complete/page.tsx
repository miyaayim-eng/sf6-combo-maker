import Link from "next/link";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <>
        <div className={styles.pageTitle}>
          <h1 className={styles.pageTitle__title}>レシピ新規投稿・編集完了</h1>
        </div>
      </>
      <div className={styles.inner}>
        <p>レシピの投稿・編集が完了しました</p>
      </div>
      <p className={styles.buttonBox}>
        <Link href="/" className={styles.button}>
          トップページにもどる
        </Link>
      </p>
    </>
  );
}