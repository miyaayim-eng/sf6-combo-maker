import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

export const CharacterListItem = ({ character }) => {
  const href = `/character/${character.name}/`;
  const characterName = character.display;

  return (
    <li>
      <Link href={href}>{characterName}</Link>
    </li>
  );
};
