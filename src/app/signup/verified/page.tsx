import Link from "next/link";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>登録完了</h1>
      </div>
      <div className={styles.inner}>
        <p>メール認証が完了し、アカウントが有効化されました。</p>
        <p>ご登録ありがとうございます。サービスをお楽しみください。</p>
        <p className={styles.buttonBox}>
          <Link href="/user/" className={styles.button}>
            アカウント画面へ
          </Link>
        </p>
      </div>
    </>
  );
}
