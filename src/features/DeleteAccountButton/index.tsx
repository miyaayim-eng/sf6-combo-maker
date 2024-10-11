"use client";

import { useRouter } from "next/navigation";
import { useResetUserState } from "@/hooks/useResetUserState";
import { useTransition } from "react";
import styles from "./index.module.scss";

export const DeleteAccountButton = () => {
  const router = useRouter();
  const resetUserState = useResetUserState();
  const [isPending, startTransition] = useTransition();

  const handleDeleteUser = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/deleteUser", {
          method: "POST",
        });

        if (!response.ok) {
          throw new Error("Failed to delete the user");
        }

        resetUserState(); // ユーザーステートをリセット
        router.push("/deleteUser/complete/"); // 削除完了ページへリダイレクト
      } catch (error) {
        console.error("アカウント削除エラー:", error);
        router.push("/error"); // エラーページへリダイレクト
      }
    });
  };

  return (
    <div>
      <p className={styles.buttonBox}>
        <button
          onClick={handleDeleteUser}
          className={styles.button}
          disabled={isPending}
        >
          {isPending ? "削除中です..." : "アカウントを削除する"}
        </button>
      </p>
      {isPending && <p>アカウントを削除中です、今しばらくお待ちください。</p>}
    </div>
  );
};
