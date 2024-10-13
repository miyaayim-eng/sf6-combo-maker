import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
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
        <NavigationButton href="/">トップページにもどる</NavigationButton>
      </p>
    </>
  );
}
