import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { getCharacterData } from "@/utils/getCharacterData";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { RecipesDetail } from "@/features/RecipesDetail/";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

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
  const characterData = getCharacterData(
    commonData.characters,
    recipe?.character_name ?? null
  );

  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.characterNameJa}>{characterData?.display}</h1>
          <p className={styles.characterNameEn}>{characterData?.display_en}</p>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <RecipesDetail
          commonData={commonData}
          recipe={recipe as CommonType["recipe"]}
        />
      </ContentsWidth>
    </>
  );
}
