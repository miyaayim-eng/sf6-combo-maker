import { CommonType } from "@/types/commonType";

type Params = {
  overdrive: CommonType["recipe"]["overdrive"];
  superarts: CommonType["recipe"]["super_arts"];
  position: CommonType["recipe"]["position"];
  category: CommonType["recipe"]["category"];
  tags: CommonType["recipe"]["tags"];
  user: CommonType["recipe"]["user_id"];
};

export const getFilteredRecipesByParams = (
  recipes: CommonType["recipes"],
  params: Params
) => {
  const paramsOverdrive = params.overdrive;
  const paramsSuperArts = params.superarts;
  const paramsPosition = params.position;
  const paramsCategory = params.category;
  const paramsTags = params.tags;
  const paramsUser = params.user;

  let filteredRecipes = recipes;

  if (paramsOverdrive) {
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      return recipe.overdrive == paramsOverdrive;
    });
  }
  if (paramsSuperArts) {
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      return recipe.super_arts == paramsSuperArts;
    });
  }
  if (paramsPosition) {
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      return recipe.position === paramsPosition;
    });
  }
  if (paramsCategory) {
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      return recipe.category === paramsCategory;
    });
  }
  if (paramsTags) {
    // console.log("paramsTags => ", paramsTags);
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      // recipe.tagsがnullでないかチェックし、その場合は空配列を扱う
      const recipeTags = recipe.tags ?? [];

      return paramsTags.every((tag) => {
        return recipeTags.includes(tag);
      });
    });
  }
  if (paramsUser) {
    filteredRecipes = filteredRecipes.filter((recipe: CommonType["recipe"]) => {
      return recipe.user_id === paramsUser;
    });
  }
  // console.log("filteredRecipes => ", filteredRecipes);

  return filteredRecipes;
};
