import { DeleteAccountButton } from "@/features/button/DeleteAccountButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.inner}>
      <h1 className={styles.pageTitle}>アカウント削除</h1>
      <p>
        本当にアカウントを削除してもよろしいですか？この操作は元に戻せません。
      </p>
      <DeleteAccountButton />
      <p className={styles.buttonBox}>
        <NavigationButton href="/user/">ユーザー画面へもどる</NavigationButton>
      </p>
    </div>
  );
}
