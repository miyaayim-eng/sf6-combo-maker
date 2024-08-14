import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { fetchRecipes } from "@/utils/supabase/fetch";

import { RecipeList } from "@/components/organisms/RecipeList/";

// このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
export const revalidate = 0;

export default async function Page() {
  const actionsData = await getCommonData();
  const recipes = await fetchRecipes();

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.characterNameJa}>リュウ</h1>
        <p className={styles.characterNameEn}>RYU</p>
      </div>
      <div className={styles.inner}>
        <div className={styles.sort}>
          <p>ソートエリア</p>
        </div>
        <div className={styles.filter}>
          <p>フィルターエリア</p>
        </div>
        <div className={styles.recipeList}>
          <RecipeList actionsData={actionsData} recipes={recipes} />
        </div>
        <div className={styles.pager}>
          <p>もっと表示する</p>
        </div>
      </div>
    </>
  );
}
