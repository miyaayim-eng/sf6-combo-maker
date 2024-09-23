// ---------------------------------------------------------------------
// データ挿入(Insert data)
// ---------------------------------------------------------------------
"use server";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/client";

export async function insertRecipe(recipe: recipe) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // console.log("recipe => ", recipe);

  // データ挿入
  const { error } = await supabase.from("recipes").insert({
    user_id: recipe.recipeUserId,
    title: recipe.recipeTitle,
    description: recipe.recipeDescription,
    total_damage: recipe.recipeTotalDamage,
    overdrive: recipe.recipeOverdrive,
    superarts: recipe.recipeSuperarts,
    position: recipe.recipePosition,
    category: recipe.recipeCategory,
    tags: recipe.recipeTags,
    combo: recipe.recipeCombo,
    password: recipe.recipePassword,
  });

  // エラーが発生した場合
  if (error) {
    // エラーハンドリング
    console.error("Error inserting data:", error.message);
  }
}
