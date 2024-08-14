import { atom } from "recoil";

// allCommonMovesの状態を定義
export const allCommonMovesState = atom<any[]>({
  key: "allCommonMovesState",
  default: [], // 初期値は空の配列
});

// allNormalMovesの状態を定義
export const allNormalMovesState = atom<any[]>({
  key: "allNormalMovesState",
  default: [], // 初期値は空の配列
});

// allUniqueAttacksの状態を定義
export const allUniqueAttacksState = atom<any[]>({
  key: "allUniqueAttacksState",
  default: [], // 初期値は空の配列
});
