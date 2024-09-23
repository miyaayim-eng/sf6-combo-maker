"use client";

import { useRecoilState } from "recoil";
import { userState } from "@/state/recoilState";
import { getLoginUser } from "@/utils/getLoginUser";

export const User = async () => {
  const loginUserData = await getLoginUser();
  const [user, setUser] = useRecoilState(userState);
  if (!user.bool) {
    return;
  }

  if (loginUserData) {
    const newUser = { bool: true, name: loginUserData.displayName };
    setUser(newUser);
  }

  return <>{user.name}</>;
};
