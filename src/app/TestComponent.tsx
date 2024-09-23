"use client";

import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";
import { useEffect, useState } from "react";

export const TestComponent = () => {
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

  return (
    <div>
      <p>user.bool: {user.bool ? "true" : "false"}</p>
      {/* user.boolがtrueの場合のみuser.nameを表示 */}
      <p>user.name: {user.name}</p>
      <p>user.id: {user.id}</p>
    </div>
  );
};
