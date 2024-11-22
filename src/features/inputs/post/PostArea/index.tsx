"use client";

import styles from "./index.module.scss";

import { useState, FC, memo } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

import { userState } from "@/state/recoilState";

import { insertRecipe } from "@/utils/supabase/insert";
import { updateRecipe } from "@/utils/supabase/update";
import { deleteRecipe } from "@/utils/supabase/delete";

import { PostTextbox } from "@/features/inputs/post/PostTextbox";
import { PostTextarea } from "@/features/inputs/post/PostTextarea";
import { PostSelectbox } from "@/features/inputs/post/PostSelectbox";
import { PostRadios } from "@/features/inputs/post/PostRadios";
import { PostCheckboxes } from "@/features/inputs/post/PostCheckboxes";
import { PostComboArea } from "@/features/inputs/post/combo/PostComboArea";
import { BackButton } from "@/features/button/BackButton/";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";
import { ContentsWidth } from "@/features/layout/ContentsWidth/";
import { NavigationButton } from "@/features/layout/PrimaryButton/NavigationButton";

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
  isEditing: boolean; // 新規登録or編集を判断する
};

export const PostArea: FC<Props> = memo(
  ({ commonData, recipeId, currentRecipe, isEditing }) => {
    const router = useRouter(); // useRouter フックを使用してルーターオブジェクトを取得
    const user = useRecoilValue(userState);
    const [isPending, setIsPending] = useState(false);

    const [recipeCharacter, setRecipeCharacter] = useState(
      currentRecipe?.character_name || ""
    );
    const [recipeUserId, setRecipeUserId] = useState(
      currentRecipe?.user_id || user.id || null
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

    const [recipeCombo, setRecipeCombo] = useState(currentRecipe?.combo || []);
    // console.log("recipeCombo =>", recipeCombo);

    const [recipePassword, setRecipePassword] = useState<string | "">(
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

    const onChangeRecipePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRecipePassword(e.target.value);
    };

    // レシピオブジェクト作成関数
    const createRecipe = () => {
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
      if (isPending) return; // すでに処理中の場合は早期リターン
      setIsPending(true);

      try {
        const recipe: any = createRecipe();
        // console.log("recipe => ", recipe);

        // insertRecipe 関数を呼び出してデータを挿入、成功を待つ
        await insertRecipe(recipe);

        // 挿入が成功した場合、ページ遷移を行う
        // const path = `/character/${recipeCharacter}/`;
        const path = `/posts/complete/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        // const recipe = createRecipe();
        // console.log("recipe => ", recipe);
        console.error("Error inserting recipe:", error);
        setIsPending(false); // エラー時はisPendingをfalseに戻す
      }
    };

    // 更新ボタンクリック時の動作
    const onClickUpdate = async () => {
      if (isPending) return; // すでに処理中の場合は早期リターン
      setIsPending(true);

      try {
        const recipe = createRecipe();

        // updateRecipe 関数を呼び出してデータを更新、成功を待つ
        await updateRecipe(recipeId as number, recipe as any);

        // 更新が成功した場合、ページ遷移を行う
        const path = `/character/${recipeCharacter}/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        console.error("Error updating  recipe:", error);
        setIsPending(false); // エラー時はisPendingをfalseに戻す
      }
    };

    // 削除ボタンクリック時の動作
    const onClickDelete = async () => {
      if (isPending) return; // すでに処理中の場合は早期リターン
      setIsPending(true);

      try {
        // deleteRecipe 関数を呼び出してデータを削除、成功を待つ
        await deleteRecipe(recipeId as number);

        // 削除が成功した場合、ページ遷移を行う
        const path = `/character/${recipeCharacter}/`;

        router.push(path); // 遷移先の URL を指定
      } catch (error) {
        console.error("Error deleting  recipe:", error);
        setIsPending(false); // エラー時はisPendingをfalseに戻す
      }
    };

    if (recipeUserId === null) {
      return (
        <>
          <ContentsWidth>
            <p className={styles.errorText}>
              レシピ投稿にはアカウントへのログインが必要です。
            </p>
            <div className={styles.buttonContainer}>
              <p className={styles.buttonBox}>
                <NavigationButton href="/login/">
                  ログインページへ
                </NavigationButton>
              </p>
            </div>
          </ContentsWidth>
        </>
      );
    }

    return (
      <>
        <div className={styles.form}>
          <dl className={styles.inputContainer}>
            {recipeId && (
              <>
                <dt className={styles.inputTitle}>
                  <span className={styles.inputTitle__text}>レシピID</span>
                </dt>
                <dd className={styles.inputDesc}>{recipeId}</dd>
              </>
            )}
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>キャラクター </span>
              <span className={styles.inputTitle__required}>必須</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostSelectbox
                id="character"
                value={recipeCharacter}
                name="character"
                onChange={onChangeRecipeCharacter}
                options={commonData.characters}
                useDisplay={false} // falseにすると、データベースの「name」を使用する設定にしている。
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>レシピタイトル</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostTextbox
                id="title"
                value={recipeTitle}
                name="title"
                placeholder="例）コンボ名"
                onChange={onChangeRecipeTitle}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>説明文</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostTextarea
                id="description"
                value={recipeDescription}
                name="description"
                placeholder="例）簡単コンボです。"
                onChange={onChangeRecipeDescription}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>総ダメージ量</span>
            </dt>
            <dd className={`${styles.inputDesc} ${styles.totalDamage}`}>
              <PostTextbox
                id="totalDamage"
                value={recipeTotalDamage}
                name="totalDamage"
                placeholder="例）1000"
                onChange={onChangeRecipeTotalDamage}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>消費OD量</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostSelectbox
                id="overdrive"
                value={recipeOverdrive}
                name="overdrive"
                onChange={onChangeRecipeOverdrive}
                options={overdriveOptions}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>消費SP量</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostSelectbox
                id="superarts"
                value={recipeSuperarts}
                name="superarts"
                onChange={onChangeRecipeSuperarts}
                options={superartsOptions}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>始動位置</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostSelectbox
                id="position"
                value={recipePosition}
                name="position"
                onChange={onChangeRecipePosition}
                options={positionOptions}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <label htmlFor="category">
                <span className={styles.inputTitle__text}>カテゴリー</span>
              </label>
            </dt>
            <dd className={styles.inputDesc}>
              <PostRadios
                name="category"
                onChange={onChangeRecipeCategory}
                radios={commonData.categories}
                currentRadio={recipeCategory}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>タグ</span>
            </dt>
            <dd className={styles.inputDesc}>
              <PostCheckboxes
                name="tags"
                onChange={onChangeRecipeTags}
                checkboxes={commonData.tags}
                currentCheckboxes={recipeTags}
              />
            </dd>
            <dt className={styles.inputTitle}>
              <span className={styles.inputTitle__text}>コンボ</span>
              <span className={styles.inputTitle__required}>
                必須
                <span className={styles.inputTitle__required__small}>
                  （2個以上）
                </span>
              </span>
            </dt>

            <dd className={styles.inputDesc}>
              <PostComboArea
                commonData={commonData}
                recipeCharacter={recipeCharacter}
                recipeCombo={recipeCombo}
                setRecipeCombo={setRecipeCombo}
              />
            </dd>
          </dl>
          {/* {recipeUserId === null && (
            <div>
              <dt className={styles.inputTitle}>
                <span className={styles.inputTitle__text}>
                  パスワード（半角英数字）
                </span>
                <span>
                  ゲストでも編集・削除をおこなう場合は、パスワードを入力してください。
                </span>
              </dt>
              <dd className={styles.inputDesc}>
                <PostTextbox
                  id="password"
                  value={recipePassword || ""}
                  name="password"
                  placeholder="例）19az"
                  onChange={onChangeRecipePassword}
                />
              </dd>
            </div>
          )} */}
          <div className={styles.buttonContainer}>
            <p className={styles.buttonBox}>
              {isEditing ? (
                <NavigationButton href={`/character/${recipeCharacter}/`}>
                  一覧へもどる
                </NavigationButton>
              ) : (
                <NavigationButton href="/user/">
                  アカウントページへ
                </NavigationButton>
              )}
            </p>

            {isEditing ? (
              <>
                <p className={styles.buttonBox}>
                  <ActionButton
                    disabled={
                      isPending || !recipeCharacter || recipeCombo.length < 2
                    }
                    onClick={onClickUpdate}
                  >
                    上書き保存
                  </ActionButton>
                </p>
                <p className={styles.buttonBox}>
                  <ActionButton disabled={isPending} onClick={onClickDelete}>
                    登録済みのレシピを削除する
                  </ActionButton>
                </p>
              </>
            ) : (
              <p className={styles.buttonBox}>
                <ActionButton
                  disabled={
                    isPending || !recipeCharacter || recipeCombo.length < 2
                  }
                  onClick={onClickInsert}
                >
                  {isPending ? "送信中です" : "新規登録"}
                </ActionButton>
              </p>
            )}

            {isPending && <p>情報を送信中です、今しばらくお待ちください。</p>}
          </div>
        </div>
      </>
    );
  }
);

PostArea.displayName = "PostArea";
