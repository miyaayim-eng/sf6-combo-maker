import {
  fetchInputs,
  fetchCommonMoves,
  fetchNormalMoves,
  fetchUniqueAttacks,
  fetchSpecialMoves,
  fetchCategories,
  fetchTags,
} from "./supabase/fetch";

export const getCommonData = async () => {
  const inputs = await fetchInputs();
  const commonMoves = await fetchCommonMoves();
  const normalMoves = await fetchNormalMoves();
  const uniqueAttacks = await fetchUniqueAttacks();
  const specialMoves = await fetchSpecialMoves();
  const categories = await fetchCategories();
  const tags = await fetchTags();

  return {
    inputs,
    common_moves: commonMoves,
    normal_moves: normalMoves,
    unique_attacks: uniqueAttacks,
    special_moves: specialMoves,
    categories,
    tags,
  };
};
