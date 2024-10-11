import Link from "next/link";
import { FC, memo } from "react";

import styles from "./index.module.scss";

import { RecipeInfo } from "@/features/RecipeInfo/";
import { RecipeCategory } from "@/features/RecipeCategory/";
import { RecipeTags } from "@/features/RecipeTags/";
import { RecipeComboList } from "@/features/RecipeComboList/";
import { EditButton } from "@/features/EditButton/";

import { CommonType } from "@/types/commonType";

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
      <li className={styles.example}>
        <div>
          <p>ID：{recipe.id}</p>
        </div>
        {recipe.title && (
          <div>
            <p className={styles.title}>{recipe.title}</p>
          </div>
        )}
        {recipe.description && (
          <div>
            <p className={styles.description}>
              {renderTextWithLineBreaks(recipe.description || "")}
            </p>
          </div>
        )}
        <div className={styles.info}>
          <RecipeInfo recipe={recipe} />
        </div>
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
        <div className={styles.combo}>
          <RecipeComboList combo={recipe.combo} commonData={commonData} />
        </div>
        <p>
          <Link href={`/recipe/${recipe.id}`}>詳細ページへ</Link>
        </p>
        <EditButton
          recipeId={recipe.id}
          recipeUserId={recipe.user_id}
          recipePassword={recipe.password}
        />
      </li>
    );
  }
);

RecipeListItem.displayName = "RecipeListItem";
