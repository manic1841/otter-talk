import { FavoriteRepository } from "../repositories/FavoriteRepository";
import { CardRepository } from "../repositories/CardRepository";
import type { Card } from "../domains/card/types/Card";

export const FavoriteService = {
  getFavoriteCards: (): Card[] => {
    const favoriteIds = FavoriteRepository.getFavorites();
    const allCards = CardRepository.getAll();
    return allCards.filter((card) => favoriteIds.includes(card.id));
  },

  toggleFavorite: (cardId: string): void => {
    if (FavoriteRepository.isFavorite(cardId)) {
      FavoriteRepository.removeFavorite(cardId);
    } else {
      FavoriteRepository.addFavorite(cardId);
    }
  },

  isFavorite: (cardId: string): boolean => {
    return FavoriteRepository.isFavorite(cardId);
  },
};
