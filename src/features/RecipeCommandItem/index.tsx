import { FC, memo } from "react";
import { RecipeCommand } from "@/features/RecipeCommand/";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";
import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  action: any;
  onClick?: () => void;
  commonData: CommonType["commonData"];
};

export const RecipeCommandItem: FC<Props> = memo(
  ({ action, onClick, commonData }) => {
    return (
      <li className={styles.item}>
        {/* <div className={styles.orderBox}>
        <button type="button" className={styles.orderButton}>
          ↑
        </button>
        <button type="button" className={styles.orderButton}>
          ↓
        </button>
      </div> */}
        <RecipeCommand commonData={commonData} action={action} />

        {onClick && (
          <p>
            <ActionButton onClick={onClick}>削除</ActionButton>
          </p>
        )}
      </li>
    );
  }
);

RecipeCommandItem.displayName = "RecipeCommandItem";
