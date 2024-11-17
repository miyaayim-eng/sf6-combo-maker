import styles from "./page.module.scss";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

export default function Page() {
  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウント登録：送信完了</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>
          登録メールアドレス宛に登録認証用のメールを送信しました。
          <br />
          送信されたメールのリンクをクリックして認証を完了すると、自動でログインされます。
          <br />
          登録認証用のメールの受信には数分のお時間がかかる場合があります。
          <br />
          メールが届かない場合は、お手数ですが再度登録をお試しください。
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
