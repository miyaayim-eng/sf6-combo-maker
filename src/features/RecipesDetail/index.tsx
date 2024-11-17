import styles from "./index.module.scss";

import { FC, memo } from "react";
import { RecipeTitle } from "@/features/RecipeTitle/";
import { RecipeDescription } from "@/features/RecipeDescription/";
import { RecipeInfo } from "@/features/RecipeInfo/";
import { RecipeCategory } from "@/features/RecipeCategory/";
import { RecipeTags } from "@/features/RecipeTags/";
import { RecipeCommandList } from "src/features/RecipeCommandList";
import { EditButton } from "@/features/button/EditButton/";
import { BackButton } from "@/features/button/BackButton/";

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
      <div className={styles.title}>
        {recipe.title && <RecipeTitle element="h1">{recipe.title}</RecipeTitle>}
      </div>
      <div className={styles.description}>
        {recipe.description && (
          <RecipeDescription>
            {renderTextWithLineBreaks(recipe.description || "")}
          </RecipeDescription>
        )}
      </div>
      <div className={styles.info}>
        <RecipeInfo recipe={recipe} />
      </div>
      {recipe.category || recipe.tags ? (
        <div className={styles.genre}>
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
        </div>
      ) : null}
      <div className={styles.combo}>
        <RecipeCommandList combo={recipe.combo} commonData={commonData} />
      </div>
      <EditButton
        recipeId={recipe.id}
        recipeUserId={recipe.user_id}
        recipePassword={recipe.password}
      />
      <div className={styles.BackButton}>
        <BackButton fallbackPath={`/character/${recipe.character_name}/`} />
      </div>
    </>
  );
});

RecipesDetail.displayName = "RecipesDetail";
