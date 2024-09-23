"use server";

import { createClient } from "@/utils/supabase/server";

export async function getLoginUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();

  // セッションがあるときだけ現在ログインしているユーザーを取得する
  if (data.session !== null) {
    // supabaseに用意されている現在ログインしているユーザーを取得する関数
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // currentUserにユーザーのメールアドレスを格納
    // setcurrentUser(user.email);

    // displayNameの取得
    const displayName = user.user_metadata?.displayName || "";
    // UIDの取得
    const userId = user.id;
    // console.log("user => ", user);
    // console.log("user.id => ", user.id);

    return { displayName, userId };
  } else {
    return;
  }
}
