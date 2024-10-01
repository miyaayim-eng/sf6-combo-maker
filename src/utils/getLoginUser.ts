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

    // user が null でないかチェック
    if (user) {
      // displayNameの取得
      const display_name: string = user.user_metadata?.displayName || "";
      // UIDの取得
      const user_id: string = user.id;

      return { display_name, user_id };
    }
  }

  return null;
}
