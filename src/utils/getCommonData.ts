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
  const common_moves = await fetchCommonMoves();
  const normal_moves = await fetchNormalMoves();
  const unique_attacks = await fetchUniqueAttacks();
  const special_moves = await fetchSpecialMoves();
  const super_arts = await fetchSuperArts();
  const categories = await fetchCategories();
  const tags = await fetchTags();

  return {
    characters,
    inputs,
    common_moves,
    normal_moves,
    unique_attacks,
    special_moves,
    super_arts,
    categories,
    tags,
  };
};
