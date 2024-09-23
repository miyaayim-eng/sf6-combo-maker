export const getFilteredRecipesByField = (
  recipes,
  filterField,
  filterValue
) => {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe[filterField] === filterValue;
  });

  return filteredRecipes;
};
