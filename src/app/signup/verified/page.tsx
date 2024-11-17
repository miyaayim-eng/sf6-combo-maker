import styles from "./page.module.scss";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウント登録：登録完了</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>
          メール認証が完了し、アカウントが有効化されました。
          <br />
          ご登録ありがとうございます。サービスをお楽しみください。
        </p>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonBox}>
            <NavigationButton href="/user/">
              アカウントページへ
            </NavigationButton>
          </p>
        </div>
      </ContentsWidth>
    </>
  );
}
