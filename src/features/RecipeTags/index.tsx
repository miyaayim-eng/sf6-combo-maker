import styles from "./index.module.scss";
import { RecipeTag } from "@/features/RecipeTag/";

export const RecipeTags = ({ tags, characterName }) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag) => {
        return <RecipeTag key={tag} tag={tag} characterName={characterName} />;
      })}
    </ul>
  );
};
