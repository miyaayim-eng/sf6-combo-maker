import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/serverDeleteUser";

export async function POST() {
  const supabase = createClient();

  try {
    // 現在のセッションからユーザーを取得
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error("ユーザー取得エラー:", userError);
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // ユーザー削除
    const { error } = await supabase.auth.admin.deleteUser(user.id);

    if (error) {
      console.error("アカウント削除エラー:", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }

    // 成功レスポンス
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("サーバーエラー:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
