"use client";

import { useResetUserState } from "@/hooks/useResetUserState";
import { signout } from "@/utils/supabase/account";
import styles from "./index.module.scss";

export const SignoutButton = () => {
  const resetUserState = useResetUserState(); // カスタムフックをコンポーネントのトップで呼び出す

  const handleSignout = async () => {
    await signout(); // サインアウト処理
    resetUserState(); // ユーザーステートをリセット
  };

  return (
    <p>
      <button type="button" onClick={handleSignout} className={styles.button}>
        ログアウトする
      </button>
    </p>
  );
};
