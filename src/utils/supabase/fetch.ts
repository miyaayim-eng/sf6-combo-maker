// ---------------------------------------------------------------------
// データ取得(Fetch data)
// ---------------------------------------------------------------------
// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/server";

// すべてのrecipesを取得するための非同期関数
export const fetchRecipes = async (queries = {}) => {
  try {
    // Supabaseクライアントを作成
    const supabase = createClient();

    // デフォルトの order 設定
    const defaultOrder = {
      column: "created_at",
      ascending: false, // 新しいものから古いものへ並べ替え
    };

    // column と ascending にそれぞれデフォルト値を適用
    const order = {
      column: queries.order?.column || defaultOrder.column,
      ascending:
        queries.order?.ascending !== undefined
          ? queries.order.ascending
          : defaultOrder.ascending,
    };

    // ベースのクエリを作成
    let query = supabase.from("recipes");

    // クエリにselectが指定されている場合、それを適用
    if (queries.select) {
      query = query.select(queries.select);
    } else {
      query = query.select("*");
    }

    // クエリにorderを適用
    query = query.order(order.column, { ascending: order.ascending });

    // クエリにeqを適用
    if (queries.eq) {
      query = query.eq(queries.eq.column, queries.eq.value);
    }

    // クエリを実行し、responseに代入
    const response = await query;

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

export const fetchSuperArts = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("super_arts").select();
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

export const fetchCharacters = async () => {
  try {
    const supabase = createClient();

    const response = await supabase.from("characters").select();
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

export const fetchUsers = async (queries = {}) => {
  try {
    // Supabaseクライアントを作成
    const supabase = createClient();

    // デフォルトの order 設定
    const defaultOrder = {
      column: "created_at",
      ascending: false, // 新しいものから古いものへ並べ替え
    };

    // column と ascending にそれぞれデフォルト値を適用
    const order = {
      column: queries.order?.column || defaultOrder.column,
      ascending:
        queries.order?.ascending !== undefined
          ? queries.order.ascending
          : defaultOrder.ascending,
    };

    // ベースのクエリを作成
    let query = supabase.from("users");

    // クエリにselectが指定されている場合、それを適用
    if (queries.select) {
      query = query.select(queries.select);
    } else {
      query = query.select("*");
    }

    // クエリにorderを適用
    query = query.order(order.column, { ascending: order.ascending });

    // クエリにeqを適用
    if (queries.eq) {
      query = query.eq(queries.eq.column, queries.eq.value);
    }

    // クエリを実行し、responseに代入
    const response = await query;

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
