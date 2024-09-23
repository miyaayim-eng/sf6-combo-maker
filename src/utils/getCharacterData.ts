export const getCharacterData = (characters, characterName) => {
  const characterData = characters.find((character) => {
    return character.name === characterName;
  });

  return characterData;
};
