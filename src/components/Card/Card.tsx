import React from "react";
import type { Card as CardType } from "../../domains/card/types/Card";
import { CategoryColors } from "../../domains/category/types/Category";
import { Heart, Volume2 } from "lucide-react";
import { TTSService } from "../../services/TTSService";
import "./Card.css";

interface CardProps {
  card: CardType;
  isFavorite: boolean;
  isSelected?: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect?: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({
  card,
  isFavorite,
  isSelected = false,
  onToggleFavorite,
  onSelect,
}) => {
  const handleClick = () => {
    TTSService.speak(card.speechText || card.text);
    onSelect?.(card.id);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(card.id);
  };

  return (
    <button
      onClick={handleClick}
      className={`card-root ${isSelected ? "card-selected" : ""}`}
      style={{
        backgroundColor: CategoryColors[card.category],
        color: "var(--color-text)",
      }}
    >
      <div
        role="button"
        onClick={handleFavoriteClick}
        className="favorite-btn"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          size={24}
          fill={isFavorite ? "#EF4444" : "none"}
          color={isFavorite ? "#EF4444" : "#4B5563"}
        />
      </div>

      <div className="card-content">
        {/* Placeholder for Icon/Image */}
        <span className="card-text">{card.text}</span>
      </div>

      <div className="audio-indicator">
        <Volume2 size={20} />
      </div>
    </button>
  );
};
