import styles from "./page.module.scss";
import { SignupButton } from "@/features/button/SignupButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウント登録</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <form className={styles.form}>
          <dl className={styles.inputContainer}>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>
                登録メールアドレス
              </span>
            </dt>
            <dd className={styles.inputDesc}>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>登録パスワード</span>
              <span className={styles.passwordInfo}>※6桁以上の半角英数字</span>
            </dt>
            <dd className={styles.inputDesc}>
              <input
                id="password"
                name="password"
                type="password"
                required
                className={styles.input}
              />
            </dd>

            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>表示ネーム</span>
            </dt>
            <dd className={styles.inputDesc}>
              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                className={styles.input}
              />
            </dd>
          </dl>
          <div className={styles.buttonContainer}>
            <p className={styles.buttonBox}>
              <NavigationButton href="/login/">
                ログインページにもどる
              </NavigationButton>
            </p>
            <SignupButton />
          </div>
        </form>
      </ContentsWidth>
    </>
  );
}
