import styles from "./index.module.scss";

import { CommonType } from "@/types/commonType";

import { fetchCharacters } from "@/utils/supabase/fetch";
import { CharacterListItem } from "@/features/CharacterListItem/";

export const CharacterList = async () => {
  const characters = await fetchCharacters();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {characters.map((character: CommonType["character"]) => {
          return (
            <CharacterListItem key={character.name} character={character} />
          );
        })}
      </ul>
    </nav>
  );
};
