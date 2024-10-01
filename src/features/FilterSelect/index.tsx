"use client";

import { useState } from "react";
import styles from "./index.module.scss";

import {
  overdriveOptions,
  superartsOptions,
  positionOptions,
} from "@/constants/";

import { FilterSelectRadio } from "@/features/FilterSelectRadio";
import { FilterSelectCheckbox } from "@/features/FilterSelectCheckbox";

import { CommonType } from "@/types/commonType";

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

export const FilterSelect = ({ commonData, params, updateParams }: Props) => {
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
  const handleFilterClick = () => {
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

  return (
    <div className={styles.info}>
      <p className={styles.areaTitle}>絞り込みエリア</p>
      <FilterSelectRadio
        filterName="オーバードライブ"
        radioArray={overdriveOptions}
        inputName="overdrive"
        state={selectOverdrive}
        setState={setSelectOverdrive}
      />
      <FilterSelectRadio
        filterName="スーパーアーツ"
        radioArray={superartsOptions}
        inputName="superarts"
        state={selectSuperarts}
        setState={setSelectSuperarts}
      />
      <FilterSelectRadio
        filterName="位置"
        radioArray={positionOptions}
        inputName="position"
        state={selectPosition}
        setState={setSelectPosition}
      />
      <FilterSelectRadio
        filterName="カテゴリー"
        radioArray={commonData.categories}
        inputName="category"
        state={selectCategory}
        setState={setSelectCategory}
      />
      <FilterSelectCheckbox
        filterName="タグ"
        optionsArray={commonData.tags}
        inputName="tags"
        selectedValues={selectTags}
        setSelectedValues={setSelectTags}
      />
      <p>
        <button onClick={handleFilterClick} className={styles.filterButton}>
          絞り込み実行ボタン
        </button>
      </p>
    </div>
  );
};
