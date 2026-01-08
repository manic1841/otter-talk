import type { Card } from "../domains/card/types/Card";
import { Category } from "../domains/category/types/Category";
import { INITIAL_CARDS } from "./data/cards";

export const CardRepository = {
  getAll: (): Card[] => {
    return INITIAL_CARDS;
  },

  getByCategory: (category: Category): Card[] => {
    return INITIAL_CARDS.filter((card) => card.category === category);
  },

  getById: (id: string): Card | undefined => {
    return INITIAL_CARDS.find((card) => card.id === id);
  },
};
