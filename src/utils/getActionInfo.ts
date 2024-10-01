import { CommonType } from "@/types/commonType";

// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースから取得してまとめた全てのアクション情報, 取得したいアクションカテゴリ、取得したいアクションID）
export const getActionInfo = (
  commonData: CommonType["commonData"],
  actionCategory: string,
  actionId: number
) => {
  const actionObject = commonData[
    actionCategory as keyof typeof commonData
  ].find((actionData) => {
    return actionData.id === Number(actionId);
  });

  return actionObject;
};
