"use client";

import { useState } from "react";
import { insertRecipe } from "@/utils/supabase/insert";

import styles from "./index.module.scss";

import { InputText } from "@/components/atoms/InputText";
import { InputSelect } from "@/components/atoms/InputSelect";
import { InputRadios } from "@/components/atoms/InputRadios";
import { InputCheckboxes } from "@/components/atoms/InputCheckboxes";
import { InputComboArea } from "@/components/organisms/InputComboArea";

export const RecipeForm = ({ commonData }) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeTotalDamage, setRecipeTotalDamage] = useState<number | "">(""); // 初期値は空文字列、数値または空文字列を許容
  const [recipeOverdrive, setRecipeOverdrive] = useState<number | "">("");
  const [recipeSuperarts, setRecipeSuperarts] = useState<number | "">("");
  const [recipePosition, setRecipePosition] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");
  const [recipeTags, setRecipeTags] = useState<string[]>([]); // タイプを指定
  const [recipeCombo, setRecipeCombo] = useState([]);

  const onChangeRecipTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeTitle(e.target.value);
  };

  const onChangeRecipDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeDescription(e.target.value);
  };

  const onChangeRecipTotalDamage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRecipeTotalDamage(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
  };

  const onChangeRecipOverdrive = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRecipeOverdrive(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
  };

  const onChangeRecipSuperarts = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setRecipeSuperarts(value === "" ? "" : parseFloat(value)); // 空文字列の場合も考慮
  };

  const onChangeRecipPosition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRecipePosition(e.target.value);
  };

  const onChangeRecipCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeCategory(e.target.value);
  };

  const onChangeRecipTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // チェックされた場合、配列に追加、チェックが外された場合、配列から削除
    if (e.target.checked) {
      setRecipeTags((prevTags) => [...prevTags, value]);
    } else {
      setRecipeTags((prevTags) => prevTags.filter((tag) => tag !== value));
    }
  };

  // 送信ボタンクリック時の動作
  const onClickInsert = () => {
    const createRecipe = {
      recipeTitle,
      recipeDescription,
      recipeTotalDamage:
        typeof recipeTotalDamage === "number" ? recipeTotalDamage : null, // デフォルト値をnullに設定
      recipeOverdrive:
        typeof recipeOverdrive === "number" ? recipeOverdrive : null, // デフォルト値をnullに設定
      recipeSuperarts:
        typeof recipeSuperarts === "number" ? recipeSuperarts : null, // デフォルト値をnullに設定
      recipePosition,
      recipeCategory,
      recipeTags,
      recipeCombo,
    };

    // console.log("recipeData => ", recipeData);

    // insertRecipe 関数を呼び出してデータを挿入
    insertRecipe(createRecipe);
  };

  const overdriveOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];

  const superartsOptions = [0, 1, 2, 3];

  const positionOptions = [
    "中央",
    "画面端",
    "画面端（背負い）",
    "中央（画面端寄り）",
  ];

  return (
    <>
      <p className={styles.text}>レシピ入力エリア</p>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <>
            <label htmlFor="title" className={styles.label}>
              title
            </label>
            <div className={styles.inputBox}>
              <InputText
                id="title"
                value={recipeTitle}
                name="title"
                placeholder="例）コンボ名"
                type="text"
                onChange={onChangeRecipTitle}
              />
            </div>
          </>
          <>
            <label htmlFor="description" className={styles.label}>
              description
            </label>
            <div className={styles.inputBox}>
              <InputText
                id="description"
                value={recipeDescription}
                name="description"
                placeholder="例）簡単コンボです。"
                type="text"
                onChange={onChangeRecipDescription}
              />
            </div>
          </>
          <>
            <label htmlFor="totalDamage" className={styles.label}>
              totalDamage
            </label>
            <div className={styles.inputBox}>
              <InputText
                id="totalDamage"
                value={recipeTotalDamage}
                name="totalDamage"
                placeholder="例）1000"
                type="number"
                onChange={onChangeRecipTotalDamage}
              />
            </div>
          </>
          <>
            <label htmlFor="overdrive" className={styles.label}>
              overdrive
            </label>
            <div className={styles.inputBox}>
              <InputSelect
                id="overdrive"
                value={recipeOverdrive}
                name="overdrive"
                onChange={onChangeRecipOverdrive}
                options={overdriveOptions}
              />
            </div>
          </>
          <>
            <label htmlFor="superarts" className={styles.label}>
              superarts
            </label>
            <div className={styles.inputBox}>
              <InputSelect
                id="superarts"
                value={recipeSuperarts}
                name="superarts"
                onChange={onChangeRecipSuperarts}
                options={superartsOptions}
              />
            </div>
          </>
          <>
            <label htmlFor="position" className={styles.label}>
              position
            </label>
            <div className={styles.inputBox}>
              <InputSelect
                id="position"
                value={recipePosition}
                name="position"
                onChange={onChangeRecipPosition}
                options={positionOptions}
              />
            </div>
          </>
          <>
            <p className={styles.label}>category</p>
            <div className={styles.inputBox}>
              <InputRadios
                name="category"
                onChange={onChangeRecipCategory}
                radios={commonData.categories}
              />
            </div>
          </>
          <>
            <p className={styles.label}>tags</p>
            <div className={styles.inputBox}>
              <InputCheckboxes
                name="tags"
                onChange={onChangeRecipTags}
                checkboxes={commonData.tags}
              />
            </div>
          </>
          <>
            <p className={styles.label}>combo</p>
            <div className={styles.inputBox}>
              <InputComboArea
                setRecipeCombo={setRecipeCombo}
                commonData={commonData}
              />
            </div>
          </>
        </div>
        <button
          type="button"
          className={styles.button}
          disabled={!recipeTitle}
          onClick={onClickInsert}
        >
          登録
        </button>
      </div>
    </>
  );
};
