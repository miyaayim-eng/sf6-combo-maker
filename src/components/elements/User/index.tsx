"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/recoilState";
import { getLoginUser } from "@/utils/getLoginUser";
import { createClient } from "@/utils/supabase/server";

export const User = () => {
  // Supabaseクライアントを作成
  const supabase = createClient();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const checkUser = async () => {
      // セッション情報を取得
      const { data } = await supabase.auth.getSession();

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
  }, [user, setUser, supabase]); // user, setUser, supabase が依存

  return null; // 必要に応じて、適切な JSX を返してください
};
