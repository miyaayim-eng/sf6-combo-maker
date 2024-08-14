import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

export const CharacterListItem = ({ character }) => {
  const href = `/character/${character.name.en}/`;
  const characterName = character.name.ja;

  return (
    <li>
      <Link href={href}>{characterName}</Link>
    </li>
  );
};
