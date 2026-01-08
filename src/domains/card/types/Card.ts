import { Category } from "../../category/types/Category";

export interface Card {
  id: string;
  text: string;
  category: Category;
  icon?: string; // URL or Lucide icon name
  speechText?: string; // Optional override for TTS
}
