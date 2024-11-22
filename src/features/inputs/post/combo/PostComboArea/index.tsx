import { useState, useEffect, useCallback, FC, memo, useRef } from "react";
import { RecipeCommandList } from "@/features/RecipeCommandList/";
import { PostAddCombo } from "@/features/inputs/post/combo/PostAddCombo";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  commonData?: CommonType["commonData"];
  recipeCharacter: CommonType["recipe"]["character_name"];
  recipeCombo: CommonType["recipeCombo"];
  setRecipeCombo: any;
};

export const PostComboArea: FC<Props> = memo(
  ({ commonData, recipeCharacter, recipeCombo, setRecipeCombo }) => {
    const [lastListId, setLastListId] = useState(recipeCombo?.length || 0); // 追加していくコンボにIDを付与するためのもの

    // コンボ追加時
    const addCombo = (
      actionCategory: CommonType["actionCategory"],
      actionId: CommonType["actionId"]
    ) => {
      const newListId = lastListId + 1;
      setLastListId(newListId);

      const addAction = {
        listId: newListId,
        actionCategory,
        actionId,
      };

      setRecipeCombo((prevRecipeCombo: CommonType["recipeCombo"]) => {
        if (prevRecipeCombo === null) {
          return [addAction];
        }
        return [...prevRecipeCombo, addAction];
      });
    };

    // コンボ削除時の新しいリストを取得
    const getUpdatedRecipeCombo = (index: number) => {
      if (recipeCombo === null) {
        return [];
      }
      const newRecipeCombo = [...recipeCombo];
      newRecipeCombo.splice(index, 1);
      return newRecipeCombo;
    };

    // 全てのコンボを初期化
    const resetCombo = useCallback(() => {
      // useCallbackでラップ
      setRecipeCombo([]);
      setLastListId(0);
    }, [setRecipeCombo]); // 依存関係を空にすることで、常に同じインスタンスを使用

    // キャラクター変更時、全てのコンボを初期化
    // useRefを使って前回のrecipeCharacterの値を保持する
    const prevRecipeCharacterRef = useRef(recipeCharacter);
    useEffect(() => {
      // recipeCharacterの値前回と異なる場合のみresetCombo()を実行
      if (prevRecipeCharacterRef.current !== recipeCharacter) {
        resetCombo();
        // 現在のrecipeCharacterを保存
        prevRecipeCharacterRef.current = recipeCharacter;
      }
    }, [recipeCharacter, resetCombo]);

    // コンボ削除時
    const onClickDeleteCombo = (index: number) => {
      setRecipeCombo(getUpdatedRecipeCombo(index));
    };

    return (
      <div className={styles.container}>
        {commonData && recipeCombo && recipeCombo.length > 0 && (
          <div className={styles.combo}>
            <RecipeCommandList
              commonData={commonData}
              combo={recipeCombo}
              onClick={onClickDeleteCombo}
            />
          </div>
        )}
        {commonData && (
          <PostAddCombo
            commonData={commonData}
            recipeCharacter={recipeCharacter}
            addCombo={addCombo}
          />
        )}
      </div>
    );
  }
);

PostComboArea.displayName = "PostComboArea";
