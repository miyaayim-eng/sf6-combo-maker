"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

/**
 * ログイン
 *
 * ログインが成功した場合はトップページへリダイレクトする。
 * ログインに失敗した場合はエラーページへリダイレクトする。
 *
 * @param formData - フォームから受け取ったデータ
 * @returns void
 */

export async function login(formData: FormData) {
  // ✅Supabaseクライアント
  // ログインやサインアップをするには「Supabaseクライアント」が必要。
  const supabase = createClient();

  // フォームからデータ取得
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // ✅ログイン
  // signInWithPassword(…)を使うだけでログインできる！
  // 引数にはログインに使うemailとpasswordを指定する。
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // ログインエラーの場合
  if (error) {
    redirect("/error");
  }

  // トップページのlayoutを再検証
  revalidatePath("/", "layout");
  // アカウントページへリダイレクト
  redirect("/user/");
}

/**
 * サインアップ
 *
 * サインアップが成功した場合は登録メールへ認証URL送信完了ページへリダイレクトする。
 * サインアップに失敗した場合はエラーページへリダイレクトする。
 *
 * @param formData - フォームから受け取ったデータ
 * @returns void
 */

export async function signup(formData: FormData) {
  // ✅Supabaseクライアント
  // ログインやサインアップをするには「Supabaseクライアント」が必要。
  const supabase = createClient();

  // console.log("formData => ", formData);

  // フォームからデータ取得
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const displayName = formData.get("displayName") as string;

  // ✅サインアップ
  // signUp(…)を使うだけでサインアップできる！
  // 引数には今後ログインするときに使うemailとpasswordを指定する。
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName,
      },
    },
  });

  // サインアップエラーの場合
  if (error) {
    console.error("サインアップエラー:", error.message);
    redirect("/error");
  }

  // トップページのlayoutを再検証
  revalidatePath("/", "layout");
  // 登録メールへ認証URL送信完了ページへリダイレクト
  redirect("/signup/complete/");
}

/**
 * サインアウト
 *
 * サインアウトが成功した場合はログインページへリダイレクトする。
 * サインアウトに失敗した場合はエラーページへリダイレクトする。
 *
 * @returns void
 */

export async function signout() {
  // ✅Supabaseクライアント
  // ログインやサインアウトをするには「Supabaseクライアント」が必要。
  const supabase = createClient();

  // ✅サインアウト
  // signUp(…)を使うだけでサインアウトできる！
  const { error } = await supabase.auth.signOut();

  // サインアウトエラーの場合
  if (error) {
    redirect("/error");
  }

  // トップページのlayoutを再検証
  revalidatePath("/", "layout");
  //ログインページへリダイレクト
  redirect("/login/");
}

// /**
//  * アカウント削除
//  *
//  * アカウント削除が成功した場合は削除完了ページへリダイレクトする。
//  * アカウント削除に失敗した場合はエラーページへリダイレクトする。
//  *
//  * @returns void
//  */
// export async function deleteUser() {
//   // Supabaseクライアントを作成
//   const supabase = createClient();

//   // 現在のセッションからユーザーを取得
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     redirect("/error"); // ユーザーが見つからない場合はエラーページへ
//     return;
//   }

//   // SupabaseのdeleteUser関数を使用してアカウントを削除
//   const { error } = await supabase.auth.admin.deleteUser(user.id);

//   if (error) {
//     console.error("アカウント削除エラー:", error);
//     redirect("/error"); // エラーページへリダイレクト
//     return;
//   }

//   // トップページのレイアウトを再検証
//   revalidatePath("/", "layout");
//   // 削除完了ページへリダイレクト
//   redirect("/deleteUser/complete/");
// }
