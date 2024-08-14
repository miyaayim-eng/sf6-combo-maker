// ここでコマンド情報をデータベースから取得するとリクエスト回数が多すぎるため、引数から取得
// 引数（データベースから取得してまとめた全てのアクション情報, 取得したいアクションカテゴリ、取得したいアクションID）
export const getActionInfo = (actionsData, actionCategory, actionId) => {
  // const displayMode = "display_normal";
  // console.log("actionsData => ", actionsData);
  // console.log("actionCategory => ", actionCategory);
  // console.log("actionId => ", actionId);

  const actionObject = actionsData[actionCategory].find((actionData) => {
    // console.log("actionData.id => ", actionData.id);
    // console.log("actionId => ", actionId);
    return actionData.id == actionId;
  });
  // console.log("actionsData[normal_moves] => ", actionsData["normal_moves"]);
  // console.log("actionObject => ", actionObject);

  return actionObject;
};
