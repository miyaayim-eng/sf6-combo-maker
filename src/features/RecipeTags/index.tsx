import { FC, memo } from "react";
import styles from "./index.module.scss";
import { RecipeTag } from "@/features/RecipeTag/";

import { CommonType } from "@/types/commonType";

type Props = {
  tags: CommonType["recipe"]["tags"];
  characterName: CommonType["characterName"];
};

export const RecipeTags: FC<Props> = memo(({ tags, characterName }) => {
  return (
    <ul className={styles.list}>
      {tags?.map((tag) => (
        <RecipeTag key={tag} tag={tag} characterName={characterName} />
      ))}
    </ul>
  );
});

RecipeTags.displayName = "RecipeTags";
