import styles from "./page.module.scss";

import { getCommonData } from "@/utils/getCommonData";

import { PostArea } from "@/features/inputs/post/PostArea/";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

export default async function Page() {
  const commonData = await getCommonData();

  return (
    <>
      <div className={styles.pageTitle}>
        <ContentsWidth>
          <h1 className={styles.pageTitle__title}>レシピ新規作成</h1>
        </ContentsWidth>
      </div>
      <ContentsWidth paddingBlock={true}>
        <PostArea commonData={commonData} isEditing={false} />
      </ContentsWidth>
    </>
  );
}
