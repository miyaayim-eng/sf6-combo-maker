import styles from "./index.module.scss";

import { useState, useEffect, FC, memo } from "react";

import { ComboList } from "@/features/ComboList";
import { InputAddCombo } from "@/features/InputAddCombo";

import { CommonType } from "@/types/commonType";

type Props = {
  commonData?: CommonType["commonData"];
  recipeCharacter: CommonType["recipe"]["character_name"];
  recipeCombo: CommonType["recipeCombo"];
  setRecipeCombo: any;
};

export const InputComboArea: FC<Props> = memo(
  ({ commonData, recipeCharacter, recipeCombo, setRecipeCombo }) => {
    const [comboList, setComboList] = useState(recipeCombo);
    // const [comboList, setComboList] = useState(testCombo);
    const [lastListId, setLastListId] = useState(recipeCombo?.length || 0); // 追加していくコンボにIDを付与するためのもの

    console.log("recipeCombo => ", recipeCombo);
    // console.log("lastListId => ", lastListId);

    // コンボ追加時
    const addCombo = (
      actionCategory: CommonType["actionCategory"],
      actionId: CommonType["actionId"]
    ) => {
      // console.log("--- InputAddCombo ---");
      const newListId = lastListId + 1;
      setLastListId(newListId);

      const addAction = {
        listId: newListId,
        actionCategory,
        actionId,
      };

      setComboList((prevComboList: CommonType["recipeCombo"]) => {
        if (prevComboList === null) {
          return [addAction];
        }
        return [...prevComboList, addAction];
      });
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
      if (comboList === null) {
        return [];
      }
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
      // setRecipeCombo(comboList);
      console.log("comboList => ", comboList);
    }, [comboList]);

    // return;

    return (
      <div className={styles.container}>
        {commonData && (
          <ComboList
            commonData={commonData}
            comboList={comboList}
            onClickDeleteCombo={onClickDeleteCombo}
          />
        )}
        {commonData && (
          <InputAddCombo
            commonData={commonData}
            recipeCharacter={recipeCharacter}
            addCombo={addCombo}
          />
        )}
      </div>
    );
  }
);

InputComboArea.displayName = "InputComboArea";
