import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import type { Database } from "@/components/Types/Supabase/schema";

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string } }
) {
  const cookieStore = cookies();
  // 削除の権限があるクライアント操作であることを示す
  const supabase = createRouteHandlerClient<Database>(
    { cookies: () => cookieStore },
    {
      supabaseKey: process.env.NEXT_ADMIN_SUPABASE_SERVICE_ROLE,
    }
  );
  // リクエストを叩いたユーザーの情報を取得する（Cookieが渡っているので自動で取得される）
  const user = await supabase.auth.getUser();

  // パスを叩いたユーザーが本人であるかを一応チェックしておく（パスにuser_idを付けないと、イタズラでリンク踏まされたときが怖い気がしたので。）
  if (user && user.data.user && user.data.user.id === params.user_id) {
    // 削除を実行
    const { data, error } = await supabase.auth.admin.deleteUser(
      user.data.user.id
    );
    if (data) {
      // 成功
      return NextResponse.json({
        status: "success",
        message: `アカウント削除しました。`,
      });
    }
  }

  // 失敗
  return NextResponse.json({
    status: "error",
    message: "アカウントの削除ができませんでした。",
  });
}
