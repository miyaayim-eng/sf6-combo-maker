import { useState, useEffect, FC, memo } from "react";
import { actionCategories } from "@/constants";
import styles from "./index.module.scss";

import { CommonType } from "@/types/commonType";

type Props = {
  commonData: CommonType["commonData"];
  recipeCharacter: CommonType["recipe"]["character_name"];
  addCombo: (
    actionCategory: CommonType["actionCategory"],
    actionId: CommonType["actionId"]
  ) => void;
};

export const InputAddCombo: FC<Props> = memo(
  ({ commonData, recipeCharacter, addCombo }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categoryActions, setCategoryActions] = useState<any[]>([]);
    const [selectedActionId, setSelectedActionId] = useState("");

    const onChangeSelectedCategory = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      // console.log("--- onChangeSelectedCategory ---");
      const newSelectedCategory = event.target.value;

      setSelectedCategory(newSelectedCategory);

      if (newSelectedCategory === "common_moves") {
        setCategoryActions(commonData.common_moves);
      } else if (newSelectedCategory === "normal_moves") {
        setCategoryActions(commonData.normal_moves);
      } else if (newSelectedCategory === "unique_attacks") {
        // const characterAction = commonData.unique_attacks;
        // console.log("recipeCharacter => ", recipeCharacter);
        // 「特殊技」、「必殺技」を選択した場合は、キャラごとの固有アクションを取得
        const characterAction = commonData.unique_attacks.filter(
          (actions: CommonType["unique_attack"]) => {
            return actions.character_name === recipeCharacter;
          }
        );
        setCategoryActions(characterAction);
      } else if (newSelectedCategory === "special_moves") {
        const characterAction = commonData.special_moves.filter(
          (actions: CommonType["special_move"]) => {
            return actions.character_name === recipeCharacter;
          }
        );
        setCategoryActions(characterAction);
      } else if (newSelectedCategory === "super_arts") {
        const characterAction = commonData.super_arts.filter(
          (actions: CommonType["super_art"]) => {
            return actions.character_name === recipeCharacter;
          }
        );
        setCategoryActions(characterAction);
      } else {
        setCategoryActions([]); // カテゴリが選択されていない場合は空の配列にする
      }

      // 各selectを初期表示に戻す
      setSelectedActionId("");

      // console.log("newSelectedCategory => ", newSelectedCategory);
    };

    const onChangeSelectedActionId = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      // console.log("--- onChangeSelectedActionId ---");
      const newSelectedActionId = event.target.value;

      setSelectedActionId(newSelectedActionId);

      // console.log("newSelectedActionId => ", newSelectedActionId);
    };

    const onClickAdd = () => {
      // console.log("--- onClickAdd ---");
      addCombo(selectedCategory, selectedActionId);
      // 各selectを初期表示に戻す
      resetSelect();
    };

    // 各selectを初期表示に戻す
    const resetSelect = () => {
      setSelectedCategory("");
      setCategoryActions([]);
      setSelectedActionId("");
    };

    // キャラクター変更時、各selectを初期表示に戻す
    useEffect(() => {
      resetSelect();
    }, [recipeCharacter]);

    return (
      <div className={styles.container}>
        <select
          onChange={onChangeSelectedCategory}
          value={selectedCategory}
          className={styles.select}
        >
          <option value="" disabled className={styles.option}>
            -- 行動分類 --
          </option>
          {actionCategories.map((actionCategory) => (
            <option
              key={actionCategory.name}
              value={actionCategory.name}
              className={styles.actionCategory}
            >
              {actionCategory.display}
            </option>
          ))}
        </select>
        <select
          onChange={onChangeSelectedActionId}
          value={selectedActionId}
          className={styles.select}
        >
          <option value="" disabled className={styles.option}>
            -- 行動 --
          </option>
          {categoryActions.map((action: any) => (
            <option key={action.id} value={action.id} className={styles.select}>
              {action.display_normal}
            </option>
          ))}
        </select>
        <button type="button" onClick={onClickAdd} className={styles.button}>
          追加
        </button>
      </div>
    );
  }
);

InputAddCombo.displayName = "InputAddCombo";
