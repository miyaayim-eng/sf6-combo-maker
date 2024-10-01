// 1ページの表示件数
// export const LIMIT = 12;

type actionCategoriesType = {
  name: string;
  display: string;
};

export const actionCategories: actionCategoriesType[] = [
  {
    name: "common_moves",
    display: "共通行動",
  },
  {
    name: "normal_moves",
    display: "通常技",
  },
  {
    name: "unique_attacks",
    display: "特殊技",
  },
  {
    name: "special_moves",
    display: "必殺技",
  },
  {
    name: "super_arts",
    display: "スーパーアーツ",
  },
];

type OverdriveOptionType = {
  id: number;
  name: number;
  display: number;
};

export const overdriveOptions: OverdriveOptionType[] = [
  {
    id: 1,
    name: 0,
    display: 0,
  },
  {
    id: 2,
    name: 0.5,
    display: 0.5,
  },
  {
    id: 3,
    name: 1,
    display: 1,
  },
  {
    id: 4,
    name: 1.5,
    display: 1.5,
  },
  {
    id: 5,
    name: 2,
    display: 2,
  },
  {
    id: 6,
    name: 2.5,
    display: 2.5,
  },
  {
    id: 7,
    name: 3,
    display: 3,
  },
  {
    id: 8,
    name: 3.5,
    display: 3.5,
  },
  {
    id: 9,
    name: 4,
    display: 4,
  },
  {
    id: 10,
    name: 4.5,
    display: 4.5,
  },
  {
    id: 11,
    name: 5,
    display: 5,
  },
];

type SuperartsOptionType = {
  id: number;
  name: number;
  display: number;
};

export const superartsOptions: SuperartsOptionType[] = [
  {
    id: 1,
    name: 0,
    display: 0,
  },
  {
    id: 2,
    name: 1,
    display: 1,
  },
  {
    id: 3,
    name: 2,
    display: 2,
  },
  {
    id: 4,
    name: 3,
    display: 3,
  },
];

type PositionOptionType = {
  id: number;
  name: string;
  display: string;
};

export const positionOptions: PositionOptionType[] = [
  {
    id: 1,
    name: "中央",
    display: "中央",
  },
  {
    id: 2,
    name: "画面端",
    display: "画面端",
  },
  {
    id: 3,
    name: "画面端（背負い）",
    display: "画面端（背負い）",
  },
  {
    id: 4,
    name: "中央（画面端寄り）",
    display: "中央（画面端寄り）",
  },
];
