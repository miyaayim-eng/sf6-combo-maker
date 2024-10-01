import { Database } from "@/types/database.types";

export type CommonType = {
  loginUser: {
    // user_id: string;
    display_name: string;
    user_id: string | null;
    // display_name: string | null;
  } | null;

  // characters: Database["public"]["Tables"]["characters"]["Row"];
  // characterName: Database["public"]["Tables"]["characters"]["Row"]["name"];
  // inputs: Database["public"]["Tables"]["inputs"]["Row"];
  // common_moves: Database["public"]["Tables"]["common_moves"]["Row"];
  // normal_moves: Database["public"]["Tables"]["normal_moves"]["Row"];
  // unique_attacks: Database["public"]["Tables"]["unique_attacks"]["Row"];
  // special_moves: Database["public"]["Tables"]["special_moves"]["Row"];
  // super_arts: Database["public"]["Tables"]["super_arts"]["Row"];
  // categories: Database["public"]["Tables"]["categories"]["Row"];
  // tags: Database["public"]["Tables"]["tags"]["Row"];

  characterName: Database["public"]["Tables"]["characters"]["Row"]["name"];
  character: Database["public"]["Tables"]["characters"]["Row"];
  characters: Array<CommonType["character"]>;
  input: Database["public"]["Tables"]["inputs"]["Row"];
  inputs: Array<CommonType["input"]>;
  common_move: Database["public"]["Tables"]["common_moves"]["Row"];
  common_moves: Array<CommonType["common_move"]>;
  normal_move: Database["public"]["Tables"]["normal_moves"]["Row"];
  normal_moves: Array<CommonType["normal_move"]>;
  unique_attack: Database["public"]["Tables"]["unique_attacks"]["Row"];
  unique_attacks: Array<CommonType["unique_attack"]>;
  special_move: Database["public"]["Tables"]["special_moves"]["Row"];
  special_moves: Array<CommonType["special_move"]>;
  super_art: Database["public"]["Tables"]["super_arts"]["Row"];
  super_arts: Array<CommonType["super_art"]>;
  category: Database["public"]["Tables"]["categories"]["Row"];
  categories: Array<CommonType["category"]>;
  tag: Database["public"]["Tables"]["tags"]["Row"];
  tags: Array<CommonType["tag"]>;

  commonData: {
    characters: CommonType["characters"];
    inputs: CommonType["inputs"];
    common_moves: CommonType["common_moves"];
    normal_moves: CommonType["normal_moves"];
    unique_attacks: CommonType["unique_attacks"];
    special_moves: CommonType["special_moves"];
    super_arts: CommonType["super_arts"];
    categories: CommonType["categories"];
    tags: CommonType["tags"];
  };

  // recipes: {
  //   id: Database["public"]["Tables"]["recipes"]["Row"]["id"];
  //   user_id: Database["public"]["Tables"]["recipes"]["Row"]["user_id"];
  //   character_name: Database["public"]["Tables"]["recipes"]["Row"]["character_name"];
  //   title: Database["public"]["Tables"]["recipes"]["Row"]["title"];
  //   description: Database["public"]["Tables"]["recipes"]["Row"]["description"];
  //   total_damage: Database["public"]["Tables"]["recipes"]["Row"]["total_damage"];
  //   overdrive: Database["public"]["Tables"]["recipes"]["Row"]["overdrive"];
  //   super_arts: Database["public"]["Tables"]["recipes"]["Row"]["super_arts"];
  //   position: Database["public"]["Tables"]["recipes"]["Row"]["position"];
  //   category: Database["public"]["Tables"]["recipes"]["Row"]["category"];
  //   tags: Database["public"]["Tables"]["recipes"]["Row"]["tags"];
  //   combo: Database["public"]["Tables"]["recipes"]["Row"]["combo"];
  // };

  recipe: Database["public"]["Tables"]["recipes"]["Row"];
  recipes: Array<CommonType["recipe"]>;
  recipeCombo: Database["public"]["Tables"]["recipes"]["Row"]["combo"];

  actionCategory: string;
  actionId: string;
};
