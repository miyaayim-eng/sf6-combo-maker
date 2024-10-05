"use client";

import { useRecoilValue } from "recoil";
import { userState } from "@/state/recoilState";

export const TestViewLoginUser = () => {
  const user = useRecoilValue(userState);

  return (
    <div>
      <p>user.bool: {user.bool ? "true" : "false"}</p>
      {/* user.boolがtrueの場合のみuser.nameを表示 */}
      <p>user.name: {user.bool && user.name}</p>
    </div>
  );
};
