import { FC, memo } from "react";

import Link from "next/link";
import { CommonType } from "@/types/commonType";

import styles from "./index.module.scss";

type Props = {
  character: CommonType["character"];
};

export const CharacterListItem: FC<Props> = memo(({ character }) => {
  const href = `/character/${character.name}/`;

  return (
    <li>
      <Link href={href} className={styles.link}>
        <span className={styles.nameJa}>{character.display}</span>
        {/* <span className={styles.nameEn}>{character.display_en}</span> */}
      </Link>
    </li>
  );
});

CharacterListItem.displayName = "CharacterListItem";
