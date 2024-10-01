// import { getCommands } from "@/utils/supabase/actions";

import { CommonType } from "@/types/commonType";

// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースのコマンド情報, 表示したいコマンドID）
export const convertDisplayInputInfo = (
  inputs: CommonType["inputs"],
  inputId: CommonType["input"]["id"]
) => {
  let displayMode = "display_arrow";
  // let displayMode = "display_number";

  const getInputInfo = inputs.find((input) => {
    return input.id === inputId;
  });

  if (getInputInfo?.[displayMode as keyof typeof getInputInfo] === null) {
    displayMode = "display_common";
  }

  const inputName = getInputInfo?.["name"];
  const displayInput = getInputInfo?.[displayMode as keyof typeof getInputInfo];
  return { inputName, displayInput };
};
