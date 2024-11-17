import { login } from "@/utils/supabase/account";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>ログイン</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <div>
          <form className={styles.form}>
            <dl className={styles.inputContainer}>
              <dt className={styles.inputTitle}>
                <span className={styles.inputTitle__text}>メールアドレス</span>
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
                <span className={styles.inputTitle__text}>パスワード</span>
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
            </dl>
            <div className={styles.buttonContainer}>
              <p className={styles.buttonBox}>
                <NavigationButton href="/signup/input/">
                  アカウントを新規登録する
                </NavigationButton>
              </p>
              <p className={styles.buttonBox}>
                <ActionButton formAction={login}>ログイン</ActionButton>
              </p>
            </div>
          </form>
        </div>
      </ContentsWidth>
    </>
  );
}
