// import { getCommands } from "@/utils/supabase/actions";

// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースのコマンド情報, 表示したいコマンドID）
export const convertDisplayInputInfo = (inputs, inputId) => {
  let displayMode = "display_arrow";
  // let displayMode = "display_number";

  const getInputInfo = inputs.find((input) => {
    return input.id === inputId;
  });

  // console.log("getInputInfo => ", getInputInfo);

  if (getInputInfo[displayMode] === null) {
    displayMode = "display_common";
  }

  // const inputName = getInputInfo[name];
  // const inputName = getInputInfo[name];
  const inputName = getInputInfo["name"];
  const displayInput = getInputInfo[displayMode];
  return { inputName, displayInput };
};
