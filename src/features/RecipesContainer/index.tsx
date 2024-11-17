"use client";

import { useState, useEffect, useCallback, FC, memo } from "react";
import { useSearchParams } from "next/navigation";

import { getFilteredRecipesByParams } from "@/utils/getFilteredRecipesByParams";
import { getFilterParams } from "@/utils/getFilterParams";
import { FilterArea } from "@/features/inputs/filter/FilterArea";
import { RecipeList } from "@/features/RecipeList/";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  commonData: CommonType["commonData"];
  recipes: CommonType["recipes"];
  characterName: CommonType["characterName"];
};

export const RecipesContainer: FC<Props> = memo(
  ({ commonData, recipes, characterName }) => {
    const searchParamsHook = useSearchParams(); // 直接フックを使用
    const [params, setParams] = useState(() =>
      getFilterParams(searchParamsHook)
    ); // React の公式ドキュメントでは、初期値を計算する必要がある場合は、lazy initialization（遅延初期化）を使うことが推奨されています。

    const [currentRecipes, setCurrentRecipes] = useState(recipes); // 一応初期値にrecipesを入れた

    // URLパラメーターを取得して state にセット
    const updateParams = useCallback(() => {
      const newParams = getFilterParams(searchParamsHook);

      // console.log("newParams => ", newParams);
      setParams(newParams);
    }, [searchParamsHook]);

    // URLパラメーター（searchParamsHook）の変更を監視して実行
    useEffect(() => {
      const newParams = getFilterParams(searchParamsHook);

      // 現在のURLパラメーターと最新のURLパラメーターが異なる場合に実行
      // オブジェクトの比較には、JSON.stringifyを使ってオブジェクトを文字列化して比較
      if (JSON.stringify(params) !== JSON.stringify(newParams)) {
        updateParams(); // 初回レンダリング時にパラメータをセット
      }
    }, [searchParamsHook, params, updateParams]);

    // URLパラメータまたはレシピが変更された時に実行
    useEffect(() => {
      const filteredRecipes = getFilteredRecipesByParams(recipes, params);
      setCurrentRecipes(filteredRecipes);
    }, [params, recipes]);

    return (
      <div className={styles.info}>
        <div className={styles.filter}>
          <FilterArea
            commonData={commonData}
            params={params}
            updateParams={updateParams}
          />
          <div className={styles.recipeList}>
            {currentRecipes.length === 0 ? (
              <p className={styles.recipesCount}>お探しのレシピは0件です。</p>
            ) : (
              <p className={styles.recipesCount}>
                レシピ件数：{currentRecipes.length}件
              </p>
            )}
            <RecipeList
              commonData={commonData}
              recipes={currentRecipes}
              characterName={characterName}
            />
          </div>
        </div>
      </div>
    );
  }
);

RecipesContainer.displayName = "RecipesContainer";
