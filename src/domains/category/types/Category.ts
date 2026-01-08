export const Category = {
  EXPRESSION: "EXPRESSION",
  DISCOMFORT: "DISCOMFORT",
  BODY_PARTS: "BODY_PARTS",
  NEEDS: "NEEDS",
  HOSPITAL: "HOSPITAL",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const CategoryLabels: Record<Category, string> = {
  [Category.EXPRESSION]: "表達",
  [Category.DISCOMFORT]: "身體不適",
  [Category.BODY_PARTS]: "身體部位",
  [Category.NEEDS]: "需求",
  [Category.HOSPITAL]: "醫院",
};

export const CategoryColors: Record<Category, string> = {
  [Category.EXPRESSION]: "var(--color-expression)",
  [Category.DISCOMFORT]: "var(--color-discomfort)",
  [Category.BODY_PARTS]: "var(--color-body)",
  [Category.NEEDS]: "var(--color-needs)",
  [Category.HOSPITAL]: "var(--color-hospital)",
};
