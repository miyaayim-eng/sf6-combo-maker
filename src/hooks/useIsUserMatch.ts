"use client";

import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";
import { useEffect, useState } from "react";

export const useIsUserMatch = (UserId: string | null) => {
  const user = useRecoilValue(userState);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isUserMatch, setIsUserMatch] = useState<boolean | null>(null);

  // クライアントサイドでのみレンダリングするためのフラグを設定
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // ユーザー情報が完全にロードされた後で比較を行う
  useEffect(() => {
    if (isHydrated) {
      if (user.id === null) {
        // ログインしていない状態（UserIdがnullの場合）はfalse
        setIsUserMatch(false);
      } else {
        setIsUserMatch(user.id === UserId);
      }
    }
  }, [isHydrated, user.id, UserId]);

  // サーバーサイドでの不一致を防ぐため、クライアントサイドのみで表示
  if (!isHydrated) {
    return null;
  }

  return isUserMatch;
};
