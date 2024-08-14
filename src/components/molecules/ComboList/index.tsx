import { useState } from "react";

import { ComboListItem } from "@/components/molecules/ComboListItem/";

import styles from "./index.module.scss";

export const ComboList = ({ commonData, comboList, onClickDeleteCombo }) => {
  return (
    <ol className={styles.list}>
      {comboList.map((item, index) => {
        return (
          <ComboListItem
            key={item}
            commonData={commonData}
            data={item}
            onClickDeleteCombo={() => onClickDeleteCombo(index)}
          />
        );
      })}
    </ol>
  );
};
