import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  const [gridColumns, setGridColumns] = useState<2 | 4>(2);

  const toggleGrid = () => {
    setGridColumns((prev) => (prev === 2 ? 4 : 2));
  };

  return (
    <BrowserRouter>
      <Layout gridColumns={gridColumns} onToggleGrid={toggleGrid}>
        <Routes>
          <Route path="/" element={<HomePage gridColumns={gridColumns} />} />
          <Route
            path="/category/:category"
            element={<HomePage gridColumns={gridColumns} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage gridColumns={gridColumns} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
