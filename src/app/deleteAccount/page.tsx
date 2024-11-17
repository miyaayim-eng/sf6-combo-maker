import { redirect } from "next/navigation";

import styles from "./page.module.scss";

import { DeleteAccountButton } from "@/features/button/DeleteAccountButton";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import { getLoginUser } from "@/utils/getLoginUser";

export default async function Page() {
  const loginUser = await getLoginUser();
  // ログインしていない場合は、ログインページへリダイレクト
  if (loginUser === null) redirect("/login/");

  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>アカウント削除確認</h1>
          <p className={styles.pageTitle__name}>{loginUser.display_name}さん</p>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <p className={styles.text}>
          本当にアカウントを削除してもよろしいですか？
          <br />
          この操作は元に戻せません。
        </p>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonBox}>
            <NavigationButton href="/user/">
              アカウントページへ
            </NavigationButton>
          </p>
          <DeleteAccountButton />
        </div>
      </ContentsWidth>
    </>
  );
}
