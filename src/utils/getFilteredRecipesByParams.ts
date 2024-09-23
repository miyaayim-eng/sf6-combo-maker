export const getFilteredRecipesByParams = (recipes, params) => {
  const paramsOverdrive = params.overdrive;
  const paramsSuperarts = params.superarts;
  const paramsPosition = params.position;
  const paramsCategory = params.category;
  const paramsTags = params.tags;
  const paramsUser = params.user;

  let filteredRecipes = recipes;

  if (paramsOverdrive) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.overdrive == paramsOverdrive;
    });
  }
  if (paramsSuperarts) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.superarts == paramsSuperarts;
    });
  }
  if (paramsPosition) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.position === paramsPosition;
    });
  }
  if (paramsCategory) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.category === paramsCategory;
    });
  }
  if (paramsTags) {
    // console.log("paramsTags => ", paramsTags);
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return paramsTags.every((tag) => {
        return recipe.tags.includes(tag);
      });
    });
  }
  if (paramsUser) {
    filteredRecipes = filteredRecipes.filter((recipe) => {
      return recipe.user_id === paramsUser;
    });
  }
  // console.log("filteredRecipes => ", filteredRecipes);

  return filteredRecipes;
};
