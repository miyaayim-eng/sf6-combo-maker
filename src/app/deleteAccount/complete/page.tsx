import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウント削除完了</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>登録されたアカウントを削除しました。</p>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonBox}>
            <NavigationButton href="/">トップページへ</NavigationButton>
          </p>
          <p className={styles.buttonBox}>
            <NavigationButton href="/user/">ログインページへ</NavigationButton>
          </p>
        </div>
      </ContentsWidth>
    </>
  );
}
