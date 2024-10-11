"use client";

import { FC, memo, useState, useEffect } from "react";
import { FormRecipe } from "@/features/FormRecipe";
import { useIsUserMatch } from "@/hooks/useIsUserMatch";
import { CommonType } from "@/types/commonType";
import { useRecoilValue } from "recoil";
import { passwordState } from "@/state/recoilState";

type Props = {
  commonData: CommonType["commonData"];
  recipeId: number;
  currentRecipe: CommonType["recipe"];
};

export const RecipeEditor: FC<Props> = memo(
  ({ commonData, recipeId, currentRecipe }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isUserMatch = useIsUserMatch(currentRecipe.user_id);
    const password = useRecoilValue(passwordState);

    // console.log("currentRecipe.user_id => ", currentRecipe.user_id);

    useEffect(() => {
      // ページ読み込みが完了したらisLoadingをfalseに設定
      setIsLoading(false);
    }, []);

    if (isLoading) {
      return <p>読み込み中...</p>; // または適切なローディングインジケーター
    }

    let isAuthorized = false;
    let errorMessage = "";
    if (currentRecipe.user_id === null) {
      if (password === currentRecipe.password) {
        isAuthorized = true;
      } else {
        errorMessage = "パスワードが一致しません";
      }
    } else if (isUserMatch) {
      isAuthorized = true;
    } else {
      errorMessage = "アカウントが一致しません";
    }

    return (
      <>
        {isAuthorized ? (
          <FormRecipe
            commonData={commonData}
            recipeId={recipeId}
            currentRecipe={currentRecipe}
            isEditing={true}
          />
        ) : (
          <p>{errorMessage}</p>
        )}
      </>
    );
  }
);

RecipeEditor.displayName = "RecipeEditor";
