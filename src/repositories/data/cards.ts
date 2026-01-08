import type { Card } from "../../domains/card/types/Card";
import { Category } from "../../domains/category/types/Category";

export const INITIAL_CARDS: Card[] = [
  // Expression
  {
    id: "exp-1",
    text: "是",
    category: Category.EXPRESSION,
    speechText: "是的",
  },
  {
    id: "exp-2",
    text: "不是",
    category: Category.EXPRESSION,
    speechText: "不是",
  },
  {
    id: "exp-3",
    text: "不確定",
    category: Category.EXPRESSION,
    speechText: "不確定",
  },
  {
    id: "exp-4",
    text: "再說一次",
    category: Category.EXPRESSION,
    speechText: "再說一次",
  },
  {
    id: "exp-5",
    text: "我聽不懂",
    category: Category.EXPRESSION,
    speechText: "我聽不懂",
  },

  // Discomfort
  {
    id: "dis-1",
    text: "痛",
    category: Category.DISCOMFORT,
    speechText: "痛的",
  },
  {
    id: "dis-2",
    text: "很痛",
    category: Category.DISCOMFORT,
    speechText: "很痛",
  },
  {
    id: "dis-3",
    text: "不痛",
    category: Category.DISCOMFORT,
    speechText: "不痛",
  },
  {
    id: "dis-4",
    text: "沒有氧氣",
    category: Category.DISCOMFORT,
    speechText: "沒有氧氣",
  },
  {
    id: "dis-5",
    text: "很喘",
    category: Category.DISCOMFORT,
    speechText: "很喘",
  },
  {
    id: "dis-6",
    text: "不舒服",
    category: Category.DISCOMFORT,
    speechText: "不舒服",
  },

  // Needs
  { id: "need-1", text: "大便", category: Category.NEEDS, speechText: "大便" },
  { id: "need-2", text: "尿尿", category: Category.NEEDS, speechText: "尿尿" },
  {
    id: "need-3",
    text: "床往上",
    category: Category.NEEDS,
    speechText: "床往上",
  },
  {
    id: "need-4",
    text: "床往下",
    category: Category.NEEDS,
    speechText: "床往下",
  },
  {
    id: "need-5",
    text: "想翻身",
    category: Category.NEEDS,
    speechText: "想翻身",
  },
  {
    id: "need-6",
    text: "想坐起來",
    category: Category.NEEDS,
    speechText: "想坐起來",
  },
  { id: "need-7", text: "有痰", category: Category.NEEDS, speechText: "有痰" },
  {
    id: "need-8",
    text: "想休息",
    category: Category.NEEDS,
    speechText: "想休息",
  },

  // Hospital
  {
    id: "hosp-1",
    text: "管子不舒服",
    category: Category.HOSPITAL,
    speechText: "管子不舒服",
  },
  {
    id: "hosp-2",
    text: "太緊",
    category: Category.HOSPITAL,
    speechText: "太緊",
  },

  // Body Parts (Placeholders)
  { id: "body-1", text: "頭", category: Category.BODY_PARTS, speechText: "頭" },
  {
    id: "body-2",
    text: "胸口",
    category: Category.BODY_PARTS,
    speechText: "胸口",
  },
  {
    id: "body-3",
    text: "肚子",
    category: Category.BODY_PARTS,
    speechText: "肚子",
  },
  {
    id: "body-4",
    text: "左手",
    category: Category.BODY_PARTS,
    speechText: "左手",
  },
  {
    id: "body-5",
    text: "右手",
    category: Category.BODY_PARTS,
    speechText: "右手",
  },
  { id: "body-6", text: "腳", category: Category.BODY_PARTS, speechText: "腳" },
];
