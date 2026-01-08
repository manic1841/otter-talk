import type { Card } from "../domains/card/types/Card";
import { Category } from "../domains/category/types/Category";
import { CardRepository } from "../repositories/CardRepository";

export const CardService = {
  getCardsByCategory: (category: Category): Card[] => {
    return CardRepository.getByCategory(category);
  },

  getAllCards: (): Card[] => {
    return CardRepository.getAll();
  },

  getCardById: (id: string): Card | undefined => {
    return CardRepository.getById(id);
  },
};
