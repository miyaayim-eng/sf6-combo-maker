import { useState, useEffect } from "react";
import styles from "./index.module.scss";

// import { InputCombo } from "@/components/molecules/InputCombo";
import { ComboList } from "@/components/molecules/ComboList";
import { AddCombo } from "@/components/molecules/AddCombo";

export const InputComboArea = ({ setRecipeCombo, commonData }) => {
  // const [addAction, setAddAction] = useState({});
  const [comboList, setComboList] = useState([]);
  const [lastListId, setLastListId] = useState(0);

  const addCombo = (actionCategory, actionId) => {
    // console.log("--- addCombo ---");
    const newListId = lastListId + 1;
    setLastListId(newListId);

    const addAction = {
      listId: newListId,
      actionCategory,
      actionId,
    };
    const newComboList = [...comboList, addAction];
    setComboList(newComboList);
    console.log("newComboList => ", newComboList);
  };

  // 削除機能（受け取ったtodo配列から特定のtodoを削除）
  const deleteCombo = (comboList, index: number) => {
    // console.log("---deleteCombo---");
    const newComboList = [...comboList];
    newComboList.splice(index, 1);
    return newComboList;
  };

  const onClickDeleteCombo = (index: number) => {
    // console.log("--- onClickDeleteCombo ---");
    setComboList(deleteCombo(comboList, index));
  };

  useEffect(() => {
    setRecipeCombo(comboList);
  }, [comboList]);

  return (
    <div className={styles.container}>
      <ComboList
        commonData={commonData}
        comboList={comboList}
        onClickDeleteCombo={onClickDeleteCombo}
      />
      <AddCombo commonData={commonData} addCombo={addCombo} />
    </div>
  );
};
