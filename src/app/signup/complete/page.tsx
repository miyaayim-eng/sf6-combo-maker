import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <>
        <div className={styles.pageTitle}>
          <h1 className={styles.pageTitle__title}>アカウント登録画面</h1>
        </div>
      </>
      <div className={styles.inner}>
        <p>
          登録メールアドレス宛に登録認証用のメールを送信しました。
          <br />
          送信されたメールのリンクをクリックして認証を完了すると、自動でログインされます。
        </p>
      </div>
    </>
  );
}
