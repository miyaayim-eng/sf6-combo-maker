import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { RecipesDetail } from "@/features/RecipesDetail/";

import { CommonType } from "@/types/commonType";

// このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
export const revalidate = 0;

type Params = {
  params: {
    id: string;
    name: string;
  };
};

export default async function Page({ params }: Params) {
  const recipeId = params.id;

  const commonData = await getCommonData();
  // 編集するデータを取得
  const queries = {
    eq: {
      column: "id",
      value: recipeId,
    },
  };

  const recipes = await fetchRecipes(queries);
  // 配列から最初のオブジェクトを取り出す
  const recipe = recipes.length > 0 ? recipes[0] : null;

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.recipeTitle}>{recipe?.title}</h1>
      </div>
      <div className={styles.inner}>
        <RecipesDetail
          commonData={commonData}
          recipe={recipe as CommonType["recipe"]}
        />
      </div>
    </>
  );
}
