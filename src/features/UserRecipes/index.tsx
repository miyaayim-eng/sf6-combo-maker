import styles from "./index.module.scss";
import Link from "next/link";

import { FC, memo } from "react";
import { getFilteredRecipesByField } from "@/utils/getCharacterRecipesByField";

import { CommonType } from "@/types/commonType";

// このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
export const revalidate = 0;

type Props = {
  characters: CommonType["characters"];
  recipes: CommonType["recipes"];
  loginUser: CommonType["loginUser"];
};

export const UserRecipes: FC<Props> = memo(
  ({ characters, recipes, loginUser }) => {
    // 「'loginUser' は 'null' の可能性があります」という型指定エラーへの対処用
    if (loginUser === null) return;

    const usersRecipes = getFilteredRecipesByField(
      recipes,
      "user_id",
      loginUser.user_id
    );

    const usersCharacterRecipes = (characterName: string | null) => {
      const characterRecipes = getFilteredRecipesByField(
        usersRecipes,
        "character_name",
        characterName
      );
      return characterRecipes.length;
    };

    if (usersRecipes.length === 0) return;

    return (
      <div className={styles.container}>
        <p>投稿したレシピを確認する</p>
        <ul className={styles.list}>
          {characters.map((character) => {
            const postLength = usersCharacterRecipes(character.name);

            if (postLength === 0) {
              return;
            }

            return (
              <li key={character.id} className={styles.item}>
                <Link
                  href={`/character/${character.name}/?user=${loginUser.user_id}`}
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
  }
);

UserRecipes.displayName = "UserRecipes";
