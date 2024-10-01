import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import Link from "next/link";
import { getCommonData } from "@/utils/getCommonData";
import { getLoginUser } from "@/utils/getLoginUser";
import { fetchRecipes } from "@/utils/supabase/fetch";
import { SignoutButton } from "@/features/SignoutButton";
import { UserRecipes } from "@/features/UserRecipes";

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
          <Link href="/posts/new/" className={styles.button}>
            レシピを投稿する
          </Link>
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
          <Link href="/deleteUser/" className={styles.button}>
            ログイン中のアカウントを削除する
          </Link>
        </p>
      </div>
    </>
  );
}
