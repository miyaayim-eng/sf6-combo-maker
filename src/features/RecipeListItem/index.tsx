import { FC, memo } from "react";

import { RecipeTitle } from "@/features/RecipeTitle/";
import { RecipeDescription } from "@/features/RecipeDescription/";
import { RecipeInfo } from "@/features/RecipeInfo";
import { RecipeCategory } from "@/features/RecipeCategory";
import { RecipeTags } from "@/features/RecipeTags";
import { RecipeCommandList } from "src/features/RecipeCommandList";
import { EditButton } from "@/features/button/EditButton/";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  recipe: CommonType["recipe"];
  commonData: CommonType["commonData"];
  characterName: CommonType["characterName"];
};

export const RecipeListItem: FC<Props> = memo(
  ({ recipe, commonData, characterName }) => {
    // 改行を <br> タグに変換
    const renderTextWithLineBreaks = (text: string) => {
      const htmlText = text.replace(/\n/g, "<br>");
      return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
    };

    // console.log(recipe);

    return (
      <li className={styles.card}>
        {/* <div>
          <p>ID：{recipe.id}</p>
        </div> */}
        <div className={styles.title}>
          {recipe.title && (
            <RecipeTitle element="h1">{recipe.title}</RecipeTitle>
          )}
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
                  characterName={characterName}
                />
              </div>
            )}
            {recipe.tags && (
              <div className={styles.tags}>
                <RecipeTags tags={recipe.tags} characterName={characterName} />
              </div>
            )}
          </div>
        ) : null}
        <div className={styles.combo}>
          <RecipeCommandList combo={recipe.combo} commonData={commonData} />
        </div>
        <div className={styles.buttons}>
          <p className={styles.navigationButton}>
            <NavigationButton href={`/recipe/${recipe.id}`}>
              詳細ページへ
            </NavigationButton>
          </p>
          <EditButton
            recipeId={recipe.id}
            recipeUserId={recipe.user_id}
            recipePassword={recipe.password}
          />
        </div>
      </li>
    );
  }
);

RecipeListItem.displayName = "RecipeListItem";
