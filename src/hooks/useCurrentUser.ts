"use client";

import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const user = useRecoilValue(userState);
  const [isHydrated, setIsHydrated] = useState(false);

  // クライアントサイドでのみレンダリングするためのフラグを設定
  useEffect(() => {
    setIsHydrated(true);
  }, [user]);

  // サーバーサイドでの不一致を防ぐため、クライアントサイドのみで表示
  if (!isHydrated) {
    return null;
  }

  let currentUser = null;
  if (user.bool) {
    currentUser = { name: user.name, link: "/user/" };
  } else {
    currentUser = { name: "ログイン", link: "/login/" };
  }

  return currentUser;
};
