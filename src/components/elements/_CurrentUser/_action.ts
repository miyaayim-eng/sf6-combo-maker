"use server";

import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getSession();

  let userEmail = "";

  // セッションがあるときだけ現在ログインしているユーザーを取得する
  if (data.session !== null) {
    // supabaseに用意されている現在ログインしているユーザーを取得する関数
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // currentUserにユーザーのメールアドレスを格納
    // setcurrentUser(user.email);

    userEmail = user.email;
  }

  return userEmail;
}
