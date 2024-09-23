import { createServerClient, type CookieOptions } from "@supabase/ssr"; // Supabaseのサーバーサイドクライアントを作成するための関数とクッキーオプションの型をインポート
import { cookies } from "next/headers"; // Next.jsのヘッダーからクッキーを操作するための関数をインポート
import { Database } from "@/types/database.types"; // ユーザーが定義したデータベースの型をインポート

export const createClient = () => {
  const cookieStore = cookies(); // クッキーストアを取得して、現在のリクエストのクッキーを操作する準備をする

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // 環境変数からSupabaseのURLを取得
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Supabaseサービスロールキーを取得
    {
      cookies: {
        // `getAll`と`setAll`の代わりに`get`、`set`、`remove`を使用
        get(name: string) {
          return cookieStore.get(name)?.value; // クッキー名を指定してその値を返す
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options }); // クッキーをセットする
          } catch (error) {
            console.error("Error setting cookie:", error);
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options }); // クッキーを削除するために空の値をセットする
          } catch (error) {
            console.error("Error removing cookie:", error);
          }
        },
      },
    }
  );
};
