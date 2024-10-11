import styles from "./index.module.scss";

import { FC, memo } from "react";
import { RecipeInfo } from "@/features/RecipeInfo/";
import { RecipeCategory } from "@/features/RecipeCategory/";
import { RecipeTags } from "@/features/RecipeTags/";
import { RecipeComboList } from "@/features/RecipeComboList/";
import { EditButton } from "@/features/EditButton/";
import { BackButton } from "@/features/BackButton/";

import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  recipe: CommonType["recipe"];
};

export const RecipesDetail: FC<Props> = memo(({ commonData, recipe }) => {
  // 改行を <br> タグに変換
  const renderTextWithLineBreaks = (text: string) => {
    const htmlText = text.replace(/\n/g, "<br>");
    return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };

  return (
    <>
      <div>
        <p>ID：{recipe.id}</p>
      </div>
      <div>
        <p className={styles.title}>{recipe.title}</p>
      </div>
      <div>
        <p className={styles.description}>
          {renderTextWithLineBreaks(recipe.description || "")}
        </p>
      </div>
      <div className={styles.info}>
        <RecipeInfo recipe={recipe} />
      </div>
      {recipe.category && (
        <div className={styles.category}>
          <RecipeCategory
            category={recipe.category}
            characterName={recipe.character_name}
          />
        </div>
      )}
      {recipe.tags && (
        <div className={styles.tags}>
          <RecipeTags
            tags={recipe.tags}
            characterName={recipe.character_name}
          />
        </div>
      )}
      <div className={styles.combo}>
        <RecipeComboList combo={recipe.combo} commonData={commonData} />
      </div>
      <EditButton
        recipeId={recipe.id}
        recipeUserId={recipe.user_id}
        recipePassword={recipe.password}
      />
      <BackButton fallbackPath={`/character/${recipe.character_name}/`} />
    </>
  );
});

RecipesDetail.displayName = "RecipesDetail";
