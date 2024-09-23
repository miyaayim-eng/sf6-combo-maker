"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/recoilState";
import { createClient } from "@/utils/supabase/server";
import { getLoginUser } from "@/utils/getLoginUser";

export const updateUserState = async () => {
  const [user, setUser] = useRecoilState(userState);
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();

  useEffect(() => {
    const checkUser = async () => {
      // RecoilStateのuserのboolがfalseのとき
      if (!user.bool) {
        // セッションがあるときだけ現在ログインしているユーザーを取得する
        if (data.session !== null) {
          const loginUserData = await getLoginUser();
          console.log("loginUserData => ", loginUserData);
          const newUser = {
            bool: true,
            name: loginUserData.displayName,
            id: loginUserData.userId,
          };
          setUser(newUser);
        }
      }
    };
    checkUser();
  }, [user, setUser]); // user と setUser が変わるたびに再実行
};
