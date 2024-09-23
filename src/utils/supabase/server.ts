import { createServerClient, type CookieOptions } from "@supabase/ssr"; // Supabaseのサーバーサイドクライアントを作成するための関数とクッキーオプションの型をインポート
import { cookies } from "next/headers"; // Next.jsのヘッダーからクッキーを操作するための関数をインポート
import { Database } from "@/types/database.types"; // ユーザーが定義したデータベースの型をインポート

export const createClient = () => {
  // Supabaseクライアントを作成する関数をエクスポート
  const cookieStore = cookies(); // クッキーストアを取得して、現在のリクエストのクッキーを操作する準備をする

  return createServerClient<Database>( // Supabaseクライアントを作成し、型パラメータとしてDatabase型を指定
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // 環境変数からSupabaseのURLを取得
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // 環境変数からSupabaseの匿名キーを取得
    {
      cookies: {
        // クッキー操作のための設定を定義
        // クッキーを取得する関数
        get(name: string) {
          return cookieStore.get(name)?.value; // クッキー名を指定してその値を返す
        },
        // クッキーを設定する関数
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options }); // クッキーをセットする
          } catch (error) {
            // `set`メソッドがサーバーコンポーネントから呼び出された場合のエラー処理
            // ミドルウェアでユーザーセッションをリフレッシュしている場合、このエラーは無視できる
          }
        },
        // クッキーを削除する関数
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options }); // クッキーを削除するために空の値をセットする
          } catch (error) {
            // `delete`メソッドがサーバーコンポーネントから呼び出された場合のエラー処理
            // ミドルウェアでユーザーセッションをリフレッシュしている場合、このエラーは無視できる
          }
        },
      },
    }
  );
};
