"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/recoilState";
import { getLoginUser } from "@/utils/getLoginUser";
import { useResetUserState } from "@/hooks/useResetUserState";

export const UpdateUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const resetUserState = useResetUserState(); // カスタムフックをコンポーネントのトップで呼び出す

  useEffect(() => {
    const checkUser = async () => {
      if (!user.bool) {
        // console.log("user.boolがfalseの場合");

        const loginUser = await getLoginUser();
        if (loginUser) {
          const newUser = {
            bool: true,
            name: loginUser.display_name,
            id: loginUser.user_id,
          };
          setUser(newUser);
        }

        // console.log("loginUser => ", loginUser);
        // console.log("user => ", user);
      } else if (user.bool && !user.name && !user.id) {
        // console.log("user.boolがtrueで、user.nameがない場合");
        // console.log("user => ", user);

        resetUserState(); // ユーザーステートをリセット
      }
    };
    checkUser();
  }, [user.bool, user.name, user.id, setUser, resetUserState]);

  return null; // UIに表示する必要がない場合
};
