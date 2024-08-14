// ---------------------------------------------------------------------
// データ取得(Fetch data)
// ---------------------------------------------------------------------
// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/server";

// すべてのrecipesを取得するための非同期関数
export const fetchRecipes = async () => {
  try {
    // Supabaseクライアントを作成
    const supabase = createClient();

    // recipesテーブルからすべてのカラムを取得し、responseに代入します。
    const response = await supabase
      .from("recipes")
      .select()
      .order("created_at");
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchInputs = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("inputs").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchCommonMoves = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("common_moves").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchNormalMoves = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("normal_moves").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchUniqueAttacks = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("unique_attacks").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchSpecialMoves = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("special_moves").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("categories").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};

export const fetchTags = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("tags").select();
    if (response.error) {
      console.error("Supabaseエラー:", response.error);
      return [];
    }
    // console.log("response.data => ", response.data);
    return response.data;
  } catch (error) {
    console.error("APIフェッチエラー:", error);
    return [];
  }
};
