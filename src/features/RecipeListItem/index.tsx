// import Link from "next/link";

import styles from "./index.module.scss";

import { RecipeInfo } from "@/features/RecipeInfo/";
import { RecipeCategory } from "@/features/RecipeCategory/";
import { RecipeTags } from "@/features/RecipeTags/";
import { RecipeComboList } from "@/features/RecipeComboList/";
import { EditButton } from "@/features/EditButton/";

export const RecipeListItem = ({ recipe, commonData, characterName }) => {
  // 改行を <br> タグに変換
  const renderTextWithLineBreaks = (text) => {
    const htmlText = text.replace(/\n/g, "<br>");
    return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };

  // console.log(recipe);

  return (
    <li className={styles.example}>
      <div>
        <p>ID：{recipe.id}</p>
      </div>
      <div>
        <p className={styles.title}>{recipe.title}</p>
      </div>
      <div>
        <p className={styles.description}>
          {renderTextWithLineBreaks(recipe.description)}
        </p>
      </div>
      <div className={styles.info}>
        <RecipeInfo recipe={recipe} />
      </div>
      <div className={styles.category}>
        <RecipeCategory
          category={recipe.category}
          characterName={characterName}
        />
      </div>
      <div className={styles.tags}>
        <RecipeTags tags={recipe.tags} characterName={characterName} />
      </div>
      <div className={styles.combo}>
        <RecipeComboList combo={recipe.combo} commonData={commonData} />
      </div>
      <EditButton recipeId={recipe.id} recipeUserId={recipe.user_id} />
    </li>
  );
};
