"use server";

import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/utils/supabase/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const supabase = createClient();

  // セッションまたはトークンからユーザーを取得（セッション管理は適宜実装してください）
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // ユーザー削除
  const { error } = await supabase.auth.admin.deleteUser(user.id);

  if (error) {
    console.error("アカウント削除エラー:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

  // 成功レスポンス
  res.status(200).json({ message: "User deleted successfully" });
}
