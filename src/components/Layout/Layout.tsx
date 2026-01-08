import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Category,
  CategoryLabels,
  CategoryColors,
} from "../../domains/category/types/Category";
import { Grid2X2, Grid3X3, Heart, Home, LayoutGrid } from "lucide-react";
import { TTSService } from "../../services/TTSService";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
  gridColumns: 2 | 4;
  onToggleGrid: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  className?: string; // Kept for additional custom classes if needed
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon,
  label,
  isActive,
  className = "",
}) => (
  <Link to={to} className={`nav-item ${isActive ? "active" : ""} ${className}`}>
    {icon}
    <span>{label}</span>
  </Link>
);

export const Layout: React.FC<LayoutProps> = ({
  children,
  gridColumns,
  onToggleGrid,
}) => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === "/" || location.pathname === "") return "全部";
    if (location.pathname === "/favorites") return "我的最愛";

    const match = location.pathname.match(/\/category\/(.+)/);
    if (match && match[1]) {
      const catKey = Object.values(Category).find((c) => c === match[1]);
      if (catKey) {
        return CategoryLabels[catKey];
      }
    }
    return "Otter Talk";
  };

  return (
    <div className="layout-root">
      {/* Sidebar */}
      <aside className="layout-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="logo-link">
            <Home className="logo-icon" />
            <span>Otter Talk</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <NavItem
            to="/"
            icon={<LayoutGrid size={20} />}
            label="全部"
            isActive={location.pathname === "/"}
          />
          <NavItem
            to="/favorites"
            icon={
              <Heart
                size={20}
                className={
                  location.pathname === "/favorites" ? "fill-current" : ""
                }
              />
            }
            label="我的最愛"
            isActive={location.pathname === "/favorites"}
            className="favorite-item"
          />

          <div className="category-header">
            <h3 className="category-title">分類</h3>
          </div>

          {Object.values(Category).map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className={`nav-item ${
                location.pathname.includes(cat) ? "active" : ""
              }`}
            >
              <div
                className="category-dot"
                style={{ backgroundColor: CategoryColors[cat] }}
              />
              <span className="category-link-text">{CategoryLabels[cat]}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <div className="layout-content">
        {/* Header */}
        <header className="content-header">
          <h1 className="page-title">{getPageTitle()}</h1>

          {/* Quick Action Buttons */}
          <div className="header-quick-actions">
            <button
              onClick={() => TTSService.speak("是")}
              className="quick-action-btn quick-action-yes"
            >
              是
            </button>
            <button
              onClick={() => TTSService.speak("不是")}
              className="quick-action-btn quick-action-no"
            >
              不是
            </button>
            <button
              onClick={() => TTSService.speak("選其他類別")}
              className="quick-action-btn quick-action-other"
            >
              選其他類別
            </button>
            <button
              onClick={() => TTSService.speak("妹妹")}
              className="quick-action-btn quick-action-name"
            >
              妹妹
            </button>
            <button
              onClick={() => TTSService.speak("翔翔")}
              className="quick-action-btn quick-action-name"
            >
              翔翔
            </button>
          </div>

          <button
            onClick={onToggleGrid}
            className="header-action-btn"
            title={gridColumns === 2 ? "切換小圖示" : "切換大圖示"}
          >
            {gridColumns === 2 ? <Grid3X3 size={20} /> : <Grid2X2 size={20} />}
          </button>
        </header>

        {/* Scrollable Content */}
        <main className="content-scrollable">
          <div className="content-container">{children}</div>
        </main>
      </div>
    </div>
  );
};
