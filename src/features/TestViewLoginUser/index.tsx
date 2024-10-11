"use client";

import { useRecoilValue } from "recoil";
import { userState, passwordState } from "@/state/recoilState";
import { useEffect, useState } from "react";

export const TestViewLoginUser = () => {
  const user = useRecoilValue(userState);
  const password = useRecoilValue(passwordState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <p>user.bool: {user.bool ? "true" : "false"}</p>
      {/* user.boolがtrueの場合のみuser.nameを表示 */}
      <p>user.name: {user.bool && user.name}</p>
      <p>password: {password}</p>
      <br />
    </div>
  );
};
