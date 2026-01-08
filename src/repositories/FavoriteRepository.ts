const STORAGE_KEY = "otter-talk-favorites";

export const FavoriteRepository = {
  getFavorites: (): string[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  addFavorite: (cardId: string): void => {
    const favorites = FavoriteRepository.getFavorites();
    if (!favorites.includes(cardId)) {
      favorites.push(cardId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }
  },

  removeFavorite: (cardId: string): void => {
    const favorites = FavoriteRepository.getFavorites();
    const newFavorites = favorites.filter((id) => id !== cardId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  },

  isFavorite: (cardId: string): boolean => {
    const favorites = FavoriteRepository.getFavorites();
    return favorites.includes(cardId);
  },
};
