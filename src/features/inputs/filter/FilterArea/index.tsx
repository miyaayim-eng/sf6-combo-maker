"use client";

import { useState } from "react";
import { ActionButton } from "@/features/layout/PrimaryButton/ActionButton";

import {
  overdriveOptions,
  superartsOptions,
  positionOptions,
} from "@/constants/";

import { FilterRadio } from "@/features/inputs/filter/FilterRadio";
import { FilterCheckbox } from "@/features/inputs/filter/FilterCheckbox";
import { FilterSelectbox } from "@/features/inputs/filter/FilterSelectbox";

import { CommonType } from "@/types/commonType";
import styles from "./index.module.scss";

type Props = {
  commonData: CommonType["commonData"];
  params: {
    overdrive: CommonType["recipe"]["overdrive"];
    superarts: CommonType["recipe"]["super_arts"];
    position: CommonType["recipe"]["position"];
    category: CommonType["recipe"]["category"];
    tags: CommonType["recipe"]["tags"];
    user: CommonType["recipe"]["user_id"];
  };
  updateParams: () => void;
};

export const FilterArea = ({ commonData, params, updateParams }: Props) => {
  // console.log("params => ", params);
  // console.log("params.tags => ", params.tags);
  //
  const [selectOverdrive, setSelectOverdrive] = useState(
    params.overdrive || null
  );
  const [selectSuperarts, setSelectSuperarts] = useState(
    params.superarts || null
  );
  const [selectPosition, setSelectPosition] = useState(params.position || null);
  const [selectCategory, setSelectCategory] = useState(params.category || null);

  const [selectTags, setSelectTags] = useState(params.tags || []);
  // console.log("selectTags => ", selectTags);

  const [selectUser, setSelectUser] = useState(params.user || null);

  // 絞り込みボタンを押した時に URL パラメーターを更新
  const handleApplyFilters = () => {
    // 現在のURLのパラメーターを取得
    const searchParams = new URLSearchParams(window.location.search);

    // 各フィルターの状態を確認して、URL パラメーターに設定
    if (selectOverdrive != null)
      // URLパラメータが常に文字列である必要があるため、toString() で数値を文字列に変換
      searchParams.set("overdrive", selectOverdrive.toString());
    else searchParams.delete("overdrive"); // nullの場合は削除

    if (selectSuperarts != null)
      // URLパラメータが常に文字列である必要があるため、toString() で数値を文字列に変換
      searchParams.set("superarts", selectSuperarts.toString());
    else searchParams.delete("superarts"); // nullの場合は削除

    if (selectPosition != null) searchParams.set("position", selectPosition);
    else searchParams.delete("position"); // nullの場合は削除

    if (selectCategory != null) searchParams.set("category", selectCategory);
    else searchParams.delete("category"); // nullの場合は削除

    if (selectTags && selectTags.length > 0) {
      searchParams.delete("tags"); // 一度既存の "tags" パラメーターを削除
      selectTags.forEach((tag) => {
        searchParams.append("tags", tag); // 各タグを個別に追加
      });
    } else {
      searchParams.delete("tags"); // null または空の配列の場合は削除
    }

    if (selectUser) searchParams.set("user", selectUser);
    else searchParams.delete("user"); // nullの場合は削除

    // 新しいURLを作成
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    // console.log("newUrl => ", newUrl);

    // URLを更新
    window.history.pushState(null, "", newUrl);

    // フィルターを更新
    updateParams();
  };

  //絞り込み条件をリセット
  const handleResetFilters = () => {
    // Stateをリセット
    setSelectOverdrive(null);
    setSelectSuperarts(null);
    setSelectPosition(null);
    setSelectCategory(null);
    setSelectTags([]);

    // URLをリセット
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete("overdrive");
    searchParams.delete("superarts");
    searchParams.delete("position");
    searchParams.delete("category");
    searchParams.delete("tags");

    // 新しいURLを作成
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    // URLを更新
    window.history.pushState(null, "", newUrl);

    // フィルターを更新
    updateParams();
  };

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>レシピ絞り込み</summary>
      <div className={styles.contents}>
        <dl className={styles.dl}>
          <dt className={styles.dt}>
            <span className={styles.filterName}>オーバードライブ消費量</span>
          </dt>
          <dd className={styles.dd}>
            <FilterSelectbox
              options={overdriveOptions}
              inputName="overdrive"
              state={selectOverdrive}
              setState={setSelectOverdrive}
            />
          </dd>
          <dt className={styles.dt}>
            <span className={styles.filterName}>スーパーアーツ消費量</span>
          </dt>
          <dd className={styles.dd}>
            <FilterSelectbox
              options={superartsOptions}
              inputName="superarts"
              state={selectSuperarts}
              setState={setSelectSuperarts}
            />
          </dd>
          <dt className={styles.dt}>
            <span className={styles.filterName}>コンボ始動位置</span>
          </dt>
          <dd className={styles.dd}>
            <FilterSelectbox
              options={positionOptions}
              inputName="position"
              state={selectPosition}
              setState={setSelectPosition}
            />
          </dd>
          <dt className={styles.dt}>
            <span className={styles.filterName}>カテゴリー</span>
          </dt>
          <dd className={styles.dd}>
            <FilterRadio
              radioArray={commonData.categories}
              inputName="category"
              state={selectCategory}
              setState={setSelectCategory}
            />
          </dd>
          <dt className={styles.dt}>
            <span className={styles.filterName}>タグ</span>
          </dt>
          <dd className={styles.dd}>
            <FilterCheckbox
              optionsArray={commonData.tags}
              inputName="tags"
              selectedValues={selectTags}
              setSelectedValues={setSelectTags}
            />
          </dd>
        </dl>
        <div className={styles.buttons}>
          <p className={styles.button}>
            <ActionButton onClick={handleResetFilters}>リセット</ActionButton>
          </p>
          <p className={styles.button}>
            <ActionButton onClick={handleApplyFilters}>絞り込み</ActionButton>
          </p>
        </div>
      </div>
    </details>
  );
};
