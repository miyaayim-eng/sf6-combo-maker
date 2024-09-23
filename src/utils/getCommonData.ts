import {
  fetchCharacters,
  fetchInputs,
  fetchCommonMoves,
  fetchNormalMoves,
  fetchUniqueAttacks,
  fetchSpecialMoves,
  fetchSuperArts,
  fetchCategories,
  fetchTags,
} from "./supabase/fetch";

export const getCommonData = async () => {
  const characters = await fetchCharacters();
  const inputs = await fetchInputs();
  const commonMoves = await fetchCommonMoves();
  const normalMoves = await fetchNormalMoves();
  const uniqueAttacks = await fetchUniqueAttacks();
  const specialMoves = await fetchSpecialMoves();
  const superArts = await fetchSuperArts();
  const categories = await fetchCategories();
  const tags = await fetchTags();

  return {
    characters,
    inputs,
    common_moves: commonMoves,
    normal_moves: normalMoves,
    unique_attacks: uniqueAttacks,
    special_moves: specialMoves,
    super_arts: superArts,
    categories,
    tags,
  };
};
