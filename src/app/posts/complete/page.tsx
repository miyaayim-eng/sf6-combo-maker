import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>レシピ新規投稿・編集完了</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>レシピの投稿・編集が完了しました</p>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonBox}>
            <NavigationButton href="/">トップページにもどる</NavigationButton>
          </p>
        </div>
      </ContentsWidth>
    </>
  );
}
