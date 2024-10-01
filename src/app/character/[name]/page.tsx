import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { getFilteredRecipesByField } from "@/utils/getCharacterRecipesByField";
import { getCharacterData } from "@/utils/getCharacterData";
import { RecipesContainer } from "@/features/RecipesContainer/";

// このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
export const revalidate = 0;

type Params = {
  params: {
    id: string;
    name: string;
  };
};

export default async function Page({ params }: Params) {
  const characterName = params.name;

  const commonData = await getCommonData();
  const recipes = await fetchRecipes();
  const characterRecipes = getFilteredRecipesByField(
    recipes,
    "character_name",
    characterName
  );
  const characterData = getCharacterData(commonData.characters, characterName);

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.characterNameJa}>{characterData?.display}</h1>
        <p className={styles.characterNameEn}>{characterData?.display_en}</p>
      </div>
      <div className={styles.inner}>
        <div className={styles.sort}>
          <p>ソートエリア</p>
        </div>
        <RecipesContainer
          commonData={commonData}
          recipes={characterRecipes}
          characterName={characterName}
        />
        {/* <div className={styles.pager}>
          <p>もっと表示する</p>
        </div> */}
      </div>
    </>
  );
}
