// ---------------------------------------------------------------------
// データ挿入(Insert data)
// ---------------------------------------------------------------------
"use server";

import { CommonType } from "@/types/commonType";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/client";

export async function insertRecipe(recipe: CommonType["recipe"]) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // console.log("recipe => ", recipe);

  // データ挿入
  const { error } = await supabase.from("recipes").insert({
    user_id: recipe.user_id,
    character_name: recipe.character_name,
    title: recipe.title,
    description: recipe.description,
    total_damage: recipe.total_damage,
    overdrive: recipe.overdrive,
    super_arts: recipe.super_arts,
    position: recipe.position,
    category: recipe.category,
    tags: recipe.tags,
    combo: recipe.combo,
    password: recipe.password,
  });

  // エラーが発生した場合
  if (error) {
    // エラーハンドリング
    console.error("Error inserting data:", error.message);
  }
}
