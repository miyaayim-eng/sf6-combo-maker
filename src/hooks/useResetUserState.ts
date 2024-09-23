"use client";

import { useResetRecoilState } from "recoil";
import { userState } from "@/state/recoilState";

// カスタムフックとして実装
export const useResetUserState = () => {
  const resetUser = useResetRecoilState(userState);

  const resetState = () => {
    resetUser(); // Recoil のユーザーステートをリセット
    localStorage.removeItem("recoil-persist"); // 永続化された状態をクリア
  };

  return resetState;
};
