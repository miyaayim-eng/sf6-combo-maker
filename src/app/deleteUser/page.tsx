"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Page() {
  const router = useRouter();

  const handleDeleteUser = async () => {
    try {
      const response = await fetch("/api/deleteUser", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the user");
      }

      // 削除完了ページへリダイレクト
      router.push("/deleteUser/complete/");
    } catch (error) {
      console.error("アカウント削除エラー:", error);
      // エラーページへリダイレクト
      router.push("/error");
    }
  };

  return (
    <div className={styles.inner}>
      <h1 className={styles.pageTitle}>アカウント削除</h1>
      <p>
        本当にアカウントを削除してもよろしいですか？この操作は元に戻せません。
      </p>
      <p className={styles.buttonBox}>
        <button onClick={handleDeleteUser} className={styles.button}>
          アカウントを削除する
        </button>
      </p>
      <p className={styles.buttonBox}>
        <Link href="/user/" className={styles.button}>
          ユーザー画面へもどる
        </Link>
      </p>
    </div>
  );
}
