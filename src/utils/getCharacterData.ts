import { CommonType } from "@/types/commonType";

export const getCharacterData = (
  characters: CommonType["characters"],
  characterName: CommonType["characterName"]
) => {
  const characterData = characters.find((character) => {
    return character.name === characterName;
  });

  return characterData;
};
