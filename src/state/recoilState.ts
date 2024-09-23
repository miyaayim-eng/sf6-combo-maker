import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 永続化の設定
// recoilPersist を呼び出して永続化の設定を行う
const { persistAtom } = recoilPersist();

// ログインユーザー
export const userState = atom({
  key: "userState",
  default: { bool: false, name: null, id: null },
  effects_UNSTABLE: [persistAtom],
});
