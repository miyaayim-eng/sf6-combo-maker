// ---------------------------------------------------------------------
// データ更新(Update data)
// ---------------------------------------------------------------------
"use server";

import { CommonType } from "@/types/commonType";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/client";

export async function updateRecipe(
  recipeId: CommonType["recipe"]["id"],
  recipe: CommonType["recipe"]
) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // console.log("recipe => ", recipe);

  // データ挿入
  const { error } = await supabase
    .from("recipes")
    .update({
      title: recipe.title,
      description: recipe.description,
      total_damage: recipe.total_damage,
      overdrive: recipe.overdrive,
      super_arts: recipe.super_arts,
      position: recipe.position,
      category: recipe.category,
      tags: recipe.tags,
      combo: recipe.combo,
    })
    .eq("id", recipeId);

  // エラーが発生した場合
  if (error) {
    // エラーハンドリング
    console.error("Error updating data:", error.message);
  }
}
