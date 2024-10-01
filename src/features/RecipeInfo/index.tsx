import { FC, memo } from "react";
import { formatDate } from "@/utils/formatDate";
import styles from "./index.module.scss";

import { CommonType } from "@/types/commonType";

type Props = {
  recipe: CommonType["recipe"];
};

export const RecipeInfo: FC<Props> = memo(({ recipe }) => {
  return (
    <dl className={styles.info}>
      <dt className={styles.title}>作成日</dt>
      <dd className={styles.desc}>{formatDate(recipe.created_at)}</dd>
      <dt className={styles.title}>作成者</dt>
      <dd className={styles.desc}>{recipe.user_id}</dd>
      <dt className={styles.title}>総ダメージ量</dt>
      <dd className={styles.desc}>{recipe.total_damage}</dd>
      <dt className={styles.title}>OD消費量</dt>
      <dd className={styles.desc}>{recipe.overdrive}本</dd>
      <dt className={styles.title}>SA消費量</dt>
      <dd className={styles.desc}>{recipe.super_arts}ゲージ</dd>
      <dt className={styles.title}>始動位置</dt>
      <dd className={styles.desc}>{recipe.position}</dd>
    </dl>
  );
});

RecipeInfo.displayName = "RecipeInfo";
