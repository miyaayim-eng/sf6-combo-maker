import styles from "./page.module.scss";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

export default function ErrorPage() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>エラー</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>
          入力内容に誤りがあるか、または入力内容の送信時にエラーが発生しました。
          <br />
          再度、入力をやり直してください。
        </p>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonBox}>
            <NavigationButton href="/login/">
              ログインページにもどる
            </NavigationButton>
          </p>
        </div>
      </ContentsWidth>
    </>
  );
}
