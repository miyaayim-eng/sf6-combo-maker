"use client";

import styles from "./index.module.scss";

import { useState, useEffect, FC, memo } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

import { userState } from "@/state/recoilState";

import { insertRecipe } from "@/utils/supabase/insert";
import { updateRecipe } from "@/utils/supabase/update";
import { deleteRecipe } from "@/utils/supabase/delete";

import { InputText } from "@/features/InputText";
import { InputTextArea } from "@/features/InputTextArea";
import { InputSelect } from "@/features/InputSelect";
import { InputRadios } from "@/features/InputRadios";
import { InputCheckboxes } from "@/features/InputCheckboxes";
import { InputComboArea } from "@/features/InputComboArea";

import { CommonType } from "@/types/commonType";

import {
  overdriveOptions,
  superartsOptions,
  positionOptions,
} from "@/constants/";

type Props = {
  commonData: CommonType["commonData"];
  recipeId?: CommonType["recipe"]["id"]; // 省略可能にする
  currentRecipe?: CommonType["recipe"]; // 省略可能にする
};

export const FormRecipe: FC<Props> = memo(
  ({ commonData, recipeId, currentRecipe }) => {
    const router = useRouter(); // useRouter フックを使用してルーターオブジェクトを取得
    const user = useRecoilValue(userState);

    const [recipeCharacter, setRecipeCharacter] = useState(
      currentRecipe?.character_name || ""
    );
    const [recipeUserId, setRecipeUserId] = useState(
      currentRecipe?.user_id || user.id
    );
    const [recipeTitle, setRecipeTitle] = useState(currentRecipe?.title || "");
    const [recipeDescription, setRecipeDescription] = useState(
      currentRecipe?.description || ""
    );
    const [recipeTotalDamage, setRecipeTotalDamage] = useState<number | "">(
      currentRecipe?.total_damage || ""
    );
    const [recipeOverdrive, setRecipeOverdrive] = useState<number | "">(
      currentRecipe?.overdrive ?? ""
    );
    const [recipeSuperarts, setRecipeSuperarts] = useState<number | "">(
      currentRecipe?.super_arts ?? ""
    );
    const [recipePosition, setRecipePosition] = useState(
      currentRecipe?.position || ""
    );
    const [recipeCategory, setRecipeCategory] = useState(
      currentRecipe?.category || ""
    );
    // console.log("recipeCategory =>", recipeCategory);

    const [recipeTags, setRecipeTags] = useState<string[]>(
      currentRecipe?.tags || []
    );
    // console.log("recipeTags =>", recipeTags);

    const testCombo = [
      {
        listId: 1,
        actionId: "2",
        actionCategory: "unique_attacks",
      },
      {
        listId: 2,
        actionId: "2",
        actionCategory: "unique_attacks",
      },
    ];

    // const [recipeCombo, setRecipeCombo] = useState(currentRecipe?.combo || []);
    const [recipeCombo, setRecipeCombo] = useState(testCombo);
    // console.log("recipeCombo =>", recipeCombo);

    const [recipePassword, setRecipePassword] = useState<number | "">(
      currentRecipe?.password || ""
    );

    // console.log("currentRecipe => ", currentRecipe);
    // console.log("currentRecipe.category => ", currentRecipe.category);

    const onChangeRecipeCharacter = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setRecipeCharacter(e.target.value);
    };

    const onChangeRecipeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRecipeTitle(e.target.value);
    };

    const onChangeRecipeDescription = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setRecipeDescription(e.target.value);
      // console.log("e.target.value => ", e.target.value);
    };

    const onChangeRecipeTotalDamage = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = e.target.value;
      setRecipeTotalDamage(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
    };

    const onChangeRecipeOverdrive = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const value = e.target.value;
      setRecipeOverdrive(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
    };

    const onChangeRecipeSuperarts = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const value = e.target.value;
      setRecipeSuperarts(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
    };

    const onChangeRecipePosition = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setRecipePosition(e.target.value);
    };

    const onChangeRecipeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRecipeCategory(e.target.value);
    };

    const onChangeRecipeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // チェックされた場合、配列に追加、チェックが外された場合、配列から削除
      if (e.target.checked) {
        setRecipeTags((prevTags) => [...prevTags, value]);
      } else {
        setRecipeTags((prevTags) => prevTags.filter((tag) => tag !== value));
      }
    };

    const onChangeRecipePassword = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      const value = e.target.value;
      setRecipePassword(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
    };

    // レシピオブジェクト作成関数
    const createRecipe = () => {
      // console.log("recipeDescription => ", recipeDescription);

      return {
        user_id: recipeUserId,
        character_name: recipeCharacter,
        title: recipeTitle,
        description: recipeDescription,
        total_damage:
          typeof recipeTotalDamage === "number" ? recipeTotalDamage : null, // デフォルト値をnullに設定
        overdrive: typeof recipeOverdrive === "number" ? recipeOverdrive : null, // デフォルト値をnullに設定
        super_arts:
          typeof recipeSuperarts === "number" ? recipeSuperarts : null, // デフォルト値をnullに設定
        position: recipePosition,
        category: recipeCategory,
        tags: recipeTags,
        combo: recipeCombo,
        password: recipePassword,
      };
    };

    // 登録ボタンクリック時の動作
    const onClickInsert = async () => {
      try {
        const recipe: any = createRecipe();
        // console.log("recipe => ", recipe);

        // insertRecipe 関数を呼び出してデータを挿入、成功を待つ
        await insertRecipe(recipe);

        // 挿入が成功した場合、ページ遷移を行う
        const path = `/character/${recipeCharacter}/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        // const recipe = createRecipe();
        // console.log("recipe => ", recipe);
        console.error("Error inserting recipe:", error);
      }
    };

    // 更新ボタンクリック時の動作
    const onClickUpdate = async () => {
      try {
        const recipe = createRecipe();

        // updateRecipe 関数を呼び出してデータを挿入、成功を待つ
        await updateRecipe(recipeId as number, recipe as any);

        // 挿入が成功した場合、ページ遷移を行う
        const path = `/character/${recipeCharacter}/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        console.error("Error updating  recipe:", error);
      }
    };

    // 更新ボタンクリック時の動作
    const onClickDelete = async () => {
      try {
        // updateRecipe 関数を呼び出してデータを挿入、成功を待つ
        await deleteRecipe(recipeId as number);

        // 挿入が成功した場合、ページ遷移を行う

        const path = `/character/${recipeCharacter}/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        console.error("Error deleting  recipe:", error);
      }
    };

    return (
      <>
        <p className={styles.text}>レシピ入力エリア</p>
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            {recipeId && (
              <div>
                <p>レシピID</p>
                <p>{recipeId}</p>
              </div>
            )}
            <div>
              <label htmlFor="position" className={styles.label}>
                キャラクター
              </label>
              <div className={styles.inputBox}>
                <InputSelect
                  id="character"
                  value={recipeCharacter}
                  name="character"
                  onChange={onChangeRecipeCharacter}
                  options={commonData.characters}
                  useDisplay={false} // falseにすると、データベースの「name」を使用する設定にしている。
                />
              </div>
            </div>
            <div>
              <label htmlFor="title" className={styles.label}>
                レシピタイトル
              </label>
              <div className={styles.inputBox}>
                <InputText
                  id="title"
                  value={recipeTitle}
                  name="title"
                  placeholder="例）コンボ名"
                  onChange={onChangeRecipeTitle}
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className={styles.label}>
                説明文
              </label>
              <div className={styles.inputBox}>
                <InputTextArea
                  id="description"
                  value={recipeDescription}
                  name="description"
                  placeholder="例）簡単コンボです。"
                  onChange={onChangeRecipeDescription}
                />
              </div>
            </div>
            <div>
              <label htmlFor="totalDamage" className={styles.label}>
                総ダメージ量
              </label>
              <div className={styles.inputBox}>
                <InputText
                  id="totalDamage"
                  value={recipeTotalDamage}
                  name="totalDamage"
                  placeholder="例）1000"
                  onChange={onChangeRecipeTotalDamage}
                />
              </div>
            </div>
            <div>
              <label htmlFor="overdrive" className={styles.label}>
                消費OD量
              </label>
              <div className={styles.inputBox}>
                <InputSelect
                  id="overdrive"
                  value={recipeOverdrive}
                  name="overdrive"
                  onChange={onChangeRecipeOverdrive}
                  options={overdriveOptions}
                />
              </div>
            </div>
            <div>
              <label htmlFor="superarts" className={styles.label}>
                消費SP量
              </label>
              <div className={styles.inputBox}>
                <InputSelect
                  id="superarts"
                  value={recipeSuperarts}
                  name="superarts"
                  onChange={onChangeRecipeSuperarts}
                  options={superartsOptions}
                />
              </div>
            </div>
            <div>
              <label htmlFor="position" className={styles.label}>
                始動位置
              </label>
              <div className={styles.inputBox}>
                <InputSelect
                  id="position"
                  value={recipePosition}
                  name="position"
                  onChange={onChangeRecipePosition}
                  options={positionOptions}
                />
              </div>
            </div>
            <div>
              <p className={styles.label}>カテゴリー</p>
              <div className={styles.inputBox}>
                <InputRadios
                  name="category"
                  onChange={onChangeRecipeCategory}
                  radios={commonData.categories}
                  currentRadio={recipeCategory}
                />
              </div>
            </div>
            <div>
              <p className={styles.label}>タグ</p>
              <div className={styles.inputBox}>
                <InputCheckboxes
                  name="tags"
                  onChange={onChangeRecipeTags}
                  checkboxes={commonData.tags}
                  currentCheckboxes={recipeTags}
                />
              </div>
            </div>
            <div>
              <p className={styles.label}>コンボ</p>
              <div className={styles.inputBox}>
                <InputComboArea
                  commonData={commonData}
                  recipeCharacter={recipeCharacter}
                  recipeCombo={recipeCombo}
                  setRecipeCombo={setRecipeCombo}
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="totalDamage" className={styles.label}>
              パスワード（半角数字4桁）　※編集削除に使用します。
            </label>
            <div className={styles.inputBox}>
              <InputText
                id="password"
                value={recipePassword}
                name="password"
                placeholder="例）1234"
                onChange={onChangeRecipePassword}
              />
            </div>
          </div>
          <p>
            <button
              type="button"
              className={styles.button}
              disabled={!recipeTitle}
              onClick={onClickInsert}
            >
              新規登録
            </button>
          </p>
          <p>
            <button
              type="button"
              className={styles.button}
              disabled={!recipeTitle}
              onClick={onClickUpdate}
            >
              上書き保存
            </button>
          </p>
          <p>
            <button
              type="button"
              className={styles.button}
              disabled={!recipeTitle}
              onClick={onClickDelete}
            >
              削除
            </button>
          </p>
        </div>
      </>
    );
  }
);

FormRecipe.displayName = "FormRecipe";
