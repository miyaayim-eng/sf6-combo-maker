import styles from "./page.module.scss";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <>
        <div className={styles.pageTitle}>
          <h1 className={styles.pageTitle__title}>アカウント削除完了画面</h1>
        </div>
      </>
      <div className={styles.inner}>
        <p>登録されたアカウントを削除しました。</p>
      </div>
      <p className={styles.buttonBox}>
        <Link href="/" className={styles.button}>
          トップページへ
        </Link>
      </p>
    </>
  );
}
