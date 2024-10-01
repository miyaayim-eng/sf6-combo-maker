"use client";

import { FC, memo, useState, useEffect } from "react";
import { FormRecipe } from "@/features/FormRecipe";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";
import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  recipeId: number;
  currentRecipe: CommonType["recipe"];
};

export const RecipeEditor: FC<Props> = memo(
  ({ commonData, recipeId, currentRecipe }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isUserMatch = useIsUserMatch(currentRecipe.user_id ?? "");

    useEffect(() => {
      // ページ読み込みが完了したらisLoadingをfalseに設定
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return <p>読み込み中...</p>; // または適切なローディングインジケーター
    }

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
  }
);

RecipeEditor.displayName = "RecipeEditor";
