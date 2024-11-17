import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";
import { getLoginUser } from "@/utils/getLoginUser";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { UserRecipes } from "@/features/UserRecipes";
import { SignoutButton } from "@/features/button/SignoutButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

export default async function Page() {
  const commonData = await getCommonData();
  const loginUser = await getLoginUser();
  const recipes = await fetchRecipes();

  // ログインしていない場合は、ログインページへリダイレクト
  if (loginUser === null) redirect("/login/");

  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウントページ</h1>
          <p className={styles.pageTitle__name}>{loginUser.display_name}さん</p>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <UserRecipes
          characters={commonData.characters}
          recipes={recipes}
          loginUser={loginUser}
        />
        <p className={styles.buttonBox}>
          <NavigationButton href="/posts/new/">
            レシピを投稿する
          </NavigationButton>
        </p>
        <p className={styles.buttonBox}>
          <SignoutButton />
        </p>
        <p className={styles.buttonBox}>
          <NavigationButton href="/deleteAccount/">
            ログイン中のアカウントを削除する
          </NavigationButton>
        </p>
      </ContentsWidth>
    </>
  );
}
