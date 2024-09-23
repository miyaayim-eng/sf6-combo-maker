export function getFilterParams(searchParams) {
  // 各パラメーターを取得
  // 'get'は単一のクエリパラメータを取得
  // 'getAll'は同じクエリパラメータが複数存在する場合に、すべての値を配列として取得
  const overdrive = searchParams.get("overdrive");
  const superarts = searchParams.get("superarts");
  const position = searchParams.get("position");
  const category = searchParams.get("category");
  const tags = searchParams.getAll("tags");
  const user = searchParams.get("user");

  // 結果を確認
  const params = {
    // それぞれパラメーターがある場合だけ格納
    overdrive: overdrive || null,
    superarts: superarts || null,
    position: position || null,
    category: category || null,
    tags: tags.length > 0 ? tags : null,
    user: user || null,
  };

  //出力： { category: 'ccc', tags: [ 'aaa', 'bbb' ] }
  // console.log(params);

  return params;
}
