import React, { useState } from "react";
import { Card } from "../components/Card/Card";
import { Grid } from "../components/Grid/Grid";
import { FavoriteService } from "../services/FavoriteService";
import type { Card as CardType } from "../domains/card/types/Card";
import "./FavoritesPage.css";

interface FavoritesPageProps {
  gridColumns: 2 | 4;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  gridColumns,
}) => {
  const [cards, setCards] = useState<CardType[]>(() =>
    FavoriteService.getFavoriteCards()
  );
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleToggleFavorite = (id: string) => {
    FavoriteService.toggleFavorite(id);
    setCards(FavoriteService.getFavoriteCards());
  };

  const handleSelectCard = (id: string) => {
    setSelectedCardId(id);
  };

  if (cards.length === 0) {
    return (
      <div className="favorites-empty-state">
        <p className="favorites-empty-text">還沒有加入最愛的字卡喔！</p>
        <p className="favorites-empty-subtext">
          點擊字卡右上角的愛心即可加入。
        </p>
      </div>
    );
  }

  return (
    <div>
      <Grid columns={gridColumns}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFavorite={true}
            isSelected={selectedCardId === card.id}
            onToggleFavorite={handleToggleFavorite}
            onSelect={handleSelectCard}
          />
        ))}
      </Grid>
    </div>
  );
};
