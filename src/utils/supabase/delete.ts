// ---------------------------------------------------------------------
// データ更新(Update data)
// ---------------------------------------------------------------------
"use server";

import { CommonType } from "@/types/commonType";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/client";

export async function deleteRecipe(recipeId: CommonType["recipe"]["id"]) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // console.log("recipe => ", recipe);

  // データ挿入
  const { error } = await supabase.from("recipes").delete().eq("id", recipeId);

  // エラーが発生した場合
  if (error) {
    // エラーハンドリング
    console.error("Error inserting data:", error.message);
  }
}
