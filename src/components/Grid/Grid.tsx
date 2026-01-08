import React from "react";

interface GridProps {
  columns: 2 | 4;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ columns, children }) => {
  return (
    <div
      className={columns === 2 ? "grid-2" : "grid-4"}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "var(--spacing-md)",
        padding: "var(--spacing-md)",
      }}
    >
      {children}
    </div>
  );
};
