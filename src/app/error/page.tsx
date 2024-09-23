import styles from "./page.module.scss";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>エラー画面</h1>
      </div>
      <p>
        入力内容に誤りがあるか、または入力内容の送信時にエラーが発生しました。
      </p>
      <p>再度、入力をやり直してください。</p>
      <p className={styles.buttonBox}>
        <Link href="/login/" className={styles.button}>
          ログイン画面にもどる
        </Link>
      </p>
    </>
  );
}
