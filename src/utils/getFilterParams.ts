import { CommonType } from "@/types/commonType";

type SearchParamsType = {
  overdrive: CommonType["recipe"]["overdrive"];
  superarts: CommonType["recipe"]["super_arts"];
  position: CommonType["recipe"]["position"];
  category: CommonType["recipe"]["category"];
  tags: CommonType["recipe"]["tags"];
  user: CommonType["recipe"]["user_id"];
};

export function getFilterParams(
  searchParams: URLSearchParams
): SearchParamsType {
  // 各パラメーターを取得
  // 'get'は単一のクエリパラメータを取得
  // 'getAll'は同じクエリパラメータが複数存在する場合に、すべての値を配列として取得
  const overdriveString = searchParams.get("overdrive");
  const superartsString = searchParams.get("superarts");
  const position = searchParams.get("position");
  const category = searchParams.get("category");
  const tags = searchParams.getAll("tags");
  const user = searchParams.get("user");

  // 数値に変換
  // URLからパラメーターを取得する際は、数字は文字列として取得されるため、数値に変換する必要がある
  const overdrive = overdriveString ? Number(overdriveString) : null;
  const superarts = superartsString ? Number(superartsString) : null;

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
