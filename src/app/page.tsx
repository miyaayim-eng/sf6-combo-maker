import styles from "./page.module.scss";

import { CharacterList } from "@/features/CharacterList/";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";

export default function Page() {
  return (
    <ContentsWidth paddingBlock={true}>
      <div>
        <h1 className={styles.siteTitle}>SF6 Combo Maker</h1>
        <p className={styles.siteDesc}>
          ストリートファイター6のコンボレシピ投稿サイトです。
        </p>
      </div>
      <section>
        <div className={styles.sectionTitle}>
          <h2 className={styles.sectionTitleJa}>キャラクター</h2>
          <p className={styles.sectionTitleEn}>CHARACTER</p>
        </div>
        <CharacterList />
      </section>
    </ContentsWidth>
  );
}
