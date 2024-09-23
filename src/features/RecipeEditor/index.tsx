"use client";

// import styles from "./index.module.scss";
import { FormRecipe } from "@/features/FormRecipe";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";

export const RecipeEditor = ({ commonData, recipeId, currentRecipe }) => {
  const isUserMatch = useIsUserMatch(currentRecipe.user_id);

  return (
    <>
      {isUserMatch ? (
        <FormRecipe
          commonData={commonData}
          recipeId={recipeId}
          currentRecipe={currentRecipe}
        />
      ) : (
        <p>userIdが不一致です。</p>
      )}
    </>
  );
};
