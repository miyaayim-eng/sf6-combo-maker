"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/recoilState";
import { getLoginUser } from "@/utils/getLoginUser";
import { createClient } from "@/utils/supabase/server";

export const User = async () => {
  const [user, setUser] = useRecoilState(userState);
  const { data, error } = await supabase.auth.getSession();
  const loginUserData = await getLoginUser();

  useEffect(() => {
    const checkUser = async () => {
      // RecoilStateのuserのboolがfalseのとき
      if (!user.bool) {
        // セッションがあるときだけ現在ログインしているユーザーを取得する
        if (data.session !== null) {
          const loginUserData = await getLoginUser();
          const newUser = { bool: true, name: loginUserData.displayName };
          setUser(newUser);
        }
      }
    };
    checkUser();
  }, [user, setUser]); // user と setUser が変わるたびに再実行
};
