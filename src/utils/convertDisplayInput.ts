// import { getCommands } from "@/utils/supabase/actions";

// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースのコマンド情報, 表示したいコマンドID）
export const convertDisplayInput = (inputs, inputId) => {
  let displayMode = "display_arrow";
  // let displayMode = "display_number";

  const getInputInfo = inputs.find((input) => {
    return input.id === inputId;
  });

  if (getInputInfo[displayMode] === null) {
    displayMode = "display_common";
  }

  const displayInput = getInputInfo[displayMode];
  return displayInput;
};
