import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { getFilteredRecipesByField } from "@/utils/getCharacterRecipesByField";
import { getCharacterData } from "@/utils/getCharacterData";
import { RecipesContainer } from "@/features/RecipesContainer/";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

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
        <ContentsWidth>
          <h1 className={styles.characterNameJa}>{characterData?.display}</h1>
          <p className={styles.characterNameEn}>{characterData?.display_en}</p>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <RecipesContainer
          commonData={commonData}
          recipes={characterRecipes}
          characterName={characterName}
        />
      </ContentsWidth>
    </>
  );
}
