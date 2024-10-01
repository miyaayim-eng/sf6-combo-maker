import { CommonType } from "@/types/commonType";

export const getFilteredRecipesByField = (
  recipes: CommonType["recipes"], // 配列型を指定
  filterField: keyof CommonType["recipe"], // filterFieldはrecipesのキー
  filterValue: string | number | null
) => {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe[filterField] === filterValue;
  });

  return filteredRecipes;
};
