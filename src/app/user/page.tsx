import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { getLoginUser } from "@/utils/getLoginUser";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { UserRecipes } from "@/features/UserRecipes";
import { SignoutButton } from "@/features/button/SignoutButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

export default async function Page() {
  const commonData = await getCommonData();
  const loginUser = await getLoginUser();
  const recipes = await fetchRecipes();

  // ログインしていない場合は、ログインページへリダイレクト
  if (loginUser === null) redirect("/login/");

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>ユーザー画面</h1>
      </div>
      <div className={styles.inner}>
        <p>{loginUser.display_name}でログインしています。</p>
        <p className={styles.buttonBox}>
          <NavigationButton href="/posts/new/">
            レシピを投稿する
          </NavigationButton>
        </p>
        <UserRecipes
          characters={commonData.characters}
          recipes={recipes}
          loginUser={loginUser}
        />
        <form className={styles.form}>
          <SignoutButton />
        </form>
        <p className={styles.buttonBox}>
          <NavigationButton href="/deleteAccount/">
            ログイン中のアカウントを削除する
          </NavigationButton>
        </p>
      </div>
    </>
  );
}
