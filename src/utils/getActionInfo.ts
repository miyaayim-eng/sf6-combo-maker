// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースから取得してまとめた全てのアクション情報, 取得したいアクションカテゴリ、取得したいアクションID）
export const getActionInfo = (commonData, actionCategory, actionId) => {
  const actionObject = commonData[actionCategory].find((actionData) => {
    return actionData.id == actionId;
  });

  return actionObject;
};
