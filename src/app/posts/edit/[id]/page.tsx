import { getCommonData } from "@/utils/getCommonData";
import styles from "./page.module.scss";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { PostArea } from "@/features/inputs/post/PostArea";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

import { CommonType } from "@/types/commonType";

type Params = {
  params: {
    id: number;
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

  // console.log("queries =>", queries);

  const recipes = await fetchRecipes(queries);
  // console.log("recipes =>", recipes);

  // 配列から最初のオブジェクトを取り出す
  const currentRecipe = recipes.length > 0 ? recipes[0] : null;

  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>レシピ編集</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <PostArea
          commonData={commonData}
          recipeId={recipeId}
          currentRecipe={currentRecipe as CommonType["recipe"]}
          isEditing={true}
        />
      </ContentsWidth>
    </>
  );
}
