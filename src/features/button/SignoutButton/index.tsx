"use client";

import { useResetUserState } from "@/hooks/useResetUserState";
import { signout } from "@/utils/supabase/account";

import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";
export const SignoutButton = () => {
  const resetUserState = useResetUserState(); // カスタムフックをコンポーネントのトップで呼び出す

  const handleSignout = async () => {
    await signout(); // サインアウト処理
    resetUserState(); // ユーザーステートをリセット
  };

  return <ActionButton onClick={handleSignout}>ログアウトする</ActionButton>;
};
