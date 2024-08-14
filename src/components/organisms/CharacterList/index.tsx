import styles from "./index.module.scss";

import { CharacterListItem } from "@/components/molecules/CharacterListItem/";

export const CharacterList = () => {
  const characters = [
    {
      name: {
        ja: "リュウ",
        en: "ryu",
      },
    },
    {
      name: {
        ja: "ケン",
        en: "ken",
      },
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {characters.map((character) => {
          return (
            <CharacterListItem key={character.name.en} character={character} />
          );
        })}
      </ul>
    </nav>
  );
};
