import styles from "./index.module.scss";
import Link from "next/link";

import { getFilteredRecipesByField } from "@/utils/getCharacterRecipesByField";

// このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
export const revalidate = 0;

export const UserRecipes = ({ characters, recipes, loginUserData }) => {
  const usersRecipes = getFilteredRecipesByField(
    recipes,
    "user_id",
    loginUserData.userId
  );

  const UsersCharacterRecipes = (characterName) => {
    const characterRecipes = getFilteredRecipesByField(
      usersRecipes,
      "character_name",
      characterName
    );
    return characterRecipes.length;
  };
  if (usersRecipes.length === 0) {
    return;
  }

  return (
    <div className={styles.container}>
      <p>投稿したレシピを確認する</p>
      <ul className={styles.list}>
        {characters.map((character) => {
          const postLength = UsersCharacterRecipes(character.name);

          if (postLength === 0) {
            return;
          }

          return (
            <li key={character.id} className={styles.item}>
              <Link
                href={`/character/${character.name}/?user=${loginUserData.userId}`}
                className={styles.link}
              >
                <p className={styles.name}>{character.display}</p>
                <p>投稿数{postLength}件</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
