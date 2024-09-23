import Link from "next/link";
import styles from "./page.module.scss";
import { login } from "@/utils/supabase/account";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>ログイン画面</h1>
      </div>
      <div className={styles.inner}>
        <form className={styles.form}>
          <div className={styles.inputBox}>
            <label htmlFor="email" className={styles.label}>
              メールアドレス:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="password" className={styles.label}>
              パスワード:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={styles.input}
            />
          </div>

          <p className={styles.buttonBox}>
            <button formAction={login} className={styles.button}>
              ログイン
            </button>
          </p>
          <p className={styles.buttonBox}>
            <Link href="/signup/input/" className={styles.button}>
              アカウントを新規登録する
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
