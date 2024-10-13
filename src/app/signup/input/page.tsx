import Link from "next/link";
import styles from "./page.module.scss";
import { SignupButton } from "@/features/button/SignupButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

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
            <p className={styles.passwordInfo}>6桁以上の半角英数字</p>
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

          <SignupButton />

          <p className={styles.buttonBox}>
            <NavigationButton href="/login/">
              ログイン画面にもどる
            </NavigationButton>
          </p>
        </form>
      </div>
    </>
  );
}
