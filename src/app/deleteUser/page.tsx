import Link from "next/link";
import styles from "./page.module.scss";
import { DeleteAccountButton } from "@/features/DeleteAccountButton";

export default function Page() {
  return (
    <div className={styles.inner}>
      <h1 className={styles.pageTitle}>アカウント削除</h1>
      <p>
        本当にアカウントを削除してもよろしいですか？この操作は元に戻せません。
      </p>
      <DeleteAccountButton />
      <p className={styles.buttonBox}>
        <Link href="/user/" className={styles.button}>
          ユーザー画面へもどる
        </Link>
      </p>
    </div>
  );
}
