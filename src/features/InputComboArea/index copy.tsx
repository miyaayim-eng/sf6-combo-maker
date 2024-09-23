import { useState, useEffect, FC } from "react";
import styles from "./index.module.scss";

import { ComboList } from "@/features/ComboList";
import { InputAddCombo } from "@/features/InputAddCombo";
import { InputComboAreaProps } from "@/types/InputComboAreaType"; // 型をインポート

export const InputComboArea: FC<InputComboAreaProps> = ({
  setRecipeCombo,
  commonData,
  recipeCharacter,
  recipeCombo,
}) => {
  const [comboList, setComboList] = useState(recipeCombo);
  const [lastListId, setLastListId] = useState(recipeCombo.length); // 追加していくコンボにIDを付与するためのもの

  // console.log("recipeCombo => ", recipeCombo);
  // console.log("lastListId => ", lastListId);

  // コンボ追加時
  const addCombo = (actionCategory: string, actionId: string) => {
    // console.log("--- InputAddCombo ---");
    const newListId = lastListId + 1;
    setLastListId(newListId);

    const addAction = {
      listId: newListId,
      actionCategory,
      actionId,
    };

    setComboList((prevComboList) => [...prevComboList, addAction]);
    // console.log("newComboList => ", newComboList);
  };

  // // 削除機能（受け取ったtodo配列から特定のtodoを削除）
  // const deleteCombo = (comboList, index: number) => {
  //   // console.log("---deleteCombo---");
  //   const newComboList = [...comboList];
  //   newComboList.splice(index, 1);
  //   return newComboList;
  // };

  // コンボ削除時の新しいリストを取得
  const getUpdatedComboList = (index: number) => {
    const newComboList = [...comboList];
    newComboList.splice(index, 1);
    return newComboList;
  };

  // 全てのコンボを初期化
  const resetCombo = () => {
    // console.log("---resetCombo---");
    setComboList([]);
    setLastListId(0);
  };

  // キャラクター変更時、全てのコンボを初期化
  useEffect(() => {
    resetCombo();
  }, [recipeCharacter]);

  // コンボ削除時
  // const onClickDeleteCombo = (index: number) => {
  //   setComboList(deleteCombo(comboList, index));
  // };

  // コンボ削除時
  const onClickDeleteCombo = (index: number) => {
    // console.log("--- onClickDeleteCombo ---");
    setComboList(getUpdatedComboList(index));
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
      <InputAddCombo
        commonData={commonData}
        recipeCharacter={recipeCharacter}
        addCombo={addCombo}
      />
    </div>
  );
};
