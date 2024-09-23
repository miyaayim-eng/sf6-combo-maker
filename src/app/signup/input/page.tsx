import Link from "next/link";
import styles from "./page.module.scss";
import { signup } from "@/utils/supabase/account";

export default function Page() {
  return (
    <>
      <>
        <div className={styles.pageTitle}>
          <h1 className={styles.pageTitle__title}>アカウント登録画面</h1>
        </div>
      </>
      <div className={styles.inner}>
        <form className={styles.form}>
          <div className={styles.inputBox}>
            <label htmlFor="email" className={styles.label}>
              登録メールアドレス:
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
              登録パスワード:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="displayName" className={styles.label}>
              表示ネーム:
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              required
              className={styles.input}
            />
          </div>

          <p className={styles.buttonBox}>
            <button formAction={signup} className={styles.button}>
              登録する
            </button>
          </p>
          <p className={styles.buttonBox}>
            <Link href="/login/" className={styles.button}>
              ログイン画面にもどる
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
