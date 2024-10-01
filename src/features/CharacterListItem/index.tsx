import { FC, memo } from "react";

import Link from "next/link";
import { CommonType } from "@/types/commonType";

// import styles from "./index.module.scss";

type Props = {
  character: CommonType["character"];
};

export const CharacterListItem: FC<Props> = memo(({ character }) => {
  const href = `/character/${character.name}/`;
  const characterName = character.display;

  return (
    <li>
      <Link href={href}>{characterName}</Link>
    </li>
  );
});

CharacterListItem.displayName = "CharacterListItem";
