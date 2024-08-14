// ---------------------------------------------------------------------
// データ挿入(Insert data)
// ---------------------------------------------------------------------
"use server";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/client";

export async function insertRecipe(createRecipe: createRecipe) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // console.log("createRecipe => ", createRecipe);

  // データ挿入
  const { error } = await supabase.from("recipes").insert({
    title: createRecipe.recipeTitle,
    description: createRecipe.recipeDescription,
    total_damage: createRecipe.recipeTotalDamage,
    overdrive: createRecipe.recipeOverdrive,
    superarts: createRecipe.recipeSuperarts,
    position: createRecipe.recipePosition,
    category: createRecipe.recipeCategory,
    tags: createRecipe.recipeTags,
    combo: createRecipe.recipeCombo,
  });

  // エラーが発生した場合
  if (error) {
    // エラーハンドリング
    console.error("Error inserting data:", error.message);
  }
}
