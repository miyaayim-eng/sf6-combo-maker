import { getCommonData } from "@/utils/getCommonData";
import { RecipeForm } from "@/components/organisms/RecipeForm";
import styles from "./page.module.scss";

export default async function Page() {
  const commonData = await getCommonData();

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.pageTitle__title}>レシピ新規作成</h1>
      </div>
      <div className={styles.inner}>
        <RecipeForm commonData={commonData} />
      </div>
    </>
  );
}
