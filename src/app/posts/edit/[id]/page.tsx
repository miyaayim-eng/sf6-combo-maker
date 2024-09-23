import { getCommonData } from "@/utils/getCommonData";
import styles from "./page.module.scss";

import { fetchRecipes } from "@/utils/supabase/fetch";
import { RecipeEditor } from "@/features/RecipeEditor/";

export default async function Page({ params }) {
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
  const currentRecipe = recipes.length > 0 ? recipes[0] : null;

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>レシピ新規作成</h1>
      </div>
      <div className={styles.inner}>
        <RecipeEditor
          commonData={commonData}
          recipeId={recipeId}
          currentRecipe={currentRecipe}
        />
      </div>
    </>
  );
}
