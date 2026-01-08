import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Grid } from "../components/Grid/Grid";
import { BodyDiagram } from "../components/BodyDiagram/BodyDiagram";
import { CardService } from "../services/CardService";
import { FavoriteService } from "../services/FavoriteService";
import { Category } from "../domains/category/types/Category";
import type { Card as CardType } from "../domains/card/types/Card";

interface HomePageProps {
  gridColumns: 2 | 4;
}

export const HomePage: React.FC<HomePageProps> = ({ gridColumns }) => {
  const { category } = useParams<{ category: string }>();
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() =>
    FavoriteService.getFavoriteCards().map((c) => c.id)
  );
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Check if current category is body_parts
  const isBodyPartsCategory = category === Category.BODY_PARTS;

  // Compute cards based on category (using useMemo to avoid unnecessary recalculations)
  const cards: CardType[] = useMemo(() => {
    if (category && Object.values(Category).includes(category as Category)) {
      // Don't load body parts cards since we use a diagram instead
      if (category !== Category.BODY_PARTS) {
        return CardService.getCardsByCategory(category as Category);
      }
      return [];
    }
    // For "All" view, exclude body parts cards
    return CardService.getAllCards().filter(
      (card) => card.category !== Category.BODY_PARTS
    );
  }, [category]);

  const handleToggleFavorite = (id: string) => {
    FavoriteService.toggleFavorite(id);
    setFavoriteIds(FavoriteService.getFavoriteCards().map((c) => c.id));
  };

  const handleSelectCard = (id: string) => {
    setSelectedCardId(id);
  };

  // Show BodyDiagram for body_parts category
  if (isBodyPartsCategory) {
    return <BodyDiagram />;
  }

  return (
    <div>
      <Grid columns={gridColumns}>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFavorite={favoriteIds.includes(card.id)}
            isSelected={selectedCardId === card.id}
            onToggleFavorite={handleToggleFavorite}
            onSelect={handleSelectCard}
          />
        ))}
      </Grid>
    </div>
  );
};
