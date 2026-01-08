import React, { useState } from "react";
import { TTSService } from "../../services/TTSService";
import "./BodyDiagram.css";

interface BodyPart {
  id: string;
  label: string;
  speechText: string;
  className: string;
}

const BODY_PARTS: BodyPart[] = [
  { id: "head", label: "頭", speechText: "頭", className: "body-part-head" },
  {
    id: "chest",
    label: "胸口",
    speechText: "胸口",
    className: "body-part-chest",
  },
  {
    id: "left-shoulder",
    label: "左肩",
    speechText: "左肩",
    className: "body-part-left-shoulder",
  },
  {
    id: "right-shoulder",
    label: "右肩",
    speechText: "右肩",
    className: "body-part-right-shoulder",
  },
  {
    id: "stomach",
    label: "肚子",
    speechText: "肚子",
    className: "body-part-stomach",
  },
  {
    id: "left-hand",
    label: "左手",
    speechText: "左手",
    className: "body-part-left-hand",
  },
  {
    id: "right-hand",
    label: "右手",
    speechText: "右手",
    className: "body-part-right-hand",
  },
  {
    id: "left-leg",
    label: "左腳",
    speechText: "左腳",
    className: "body-part-left-leg",
  },
  {
    id: "right-leg",
    label: "右腳",
    speechText: "右腳",
    className: "body-part-right-leg",
  },
];

export const BodyDiagram: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  const handleBodyPartClick = (id: string, speechText: string) => {
    TTSService.speak(speechText);
    setSelectedPartId(id);
  };

  return (
    <div className="body-diagram-container">
      <h2 className="body-diagram-title">點擊身體部位</h2>
      <div className="body-diagram">
        {/* Body silhouette SVG */}
        <svg
          className="body-silhouette"
          viewBox="0 0 100 200"
          fill="currentColor"
        >
          {/* Head */}
          <circle cx="50" cy="15" r="12" />
          {/* Neck */}
          <rect x="46" y="27" width="8" height="8" />
          {/* Torso */}
          <path d="M30 35 L70 35 L65 100 L35 100 Z" />
          {/* Left Arm */}
          <path d="M30 35 L20 38 L10 70 L15 72 L25 45 L30 45 Z" />
          {/* Right Arm */}
          <path d="M70 35 L80 38 L90 70 L85 72 L75 45 L70 45 Z" />
          {/* Left Leg */}
          <path d="M35 100 L40 100 L42 180 L33 180 Z" />
          {/* Right Leg */}
          <path d="M60 100 L65 100 L67 180 L58 180 Z" />
        </svg>

        {/* Clickable body parts */}
        {BODY_PARTS.map((part) => (
          <button
            key={part.id}
            className={`body-part-btn ${part.className} ${
              selectedPartId === part.id ? "body-part-selected" : ""
            }`}
            onClick={() => handleBodyPartClick(part.id, part.speechText)}
            aria-label={part.label}
          >
            {part.label}
          </button>
        ))}
      </div>
    </div>
  );
};
