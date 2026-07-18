// src/App.jsx
import { useContext, useState, useMemo } from "react";

import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import AuthPanel from "./components/AuthPanel";
import NameSearchPanel from "./components/NameSearchPanel";
import TagSearchPanel from "./components/TagSearchPanel";
import DataPanel from "./components/DataPanel";

// ─── App Root ──────────────────────────────────────────────────────────────────
function AppContent() {
  return (
    <div className="app">
      <h1>hooks-demo</h1>
      <div className="panels">
        <AuthPanel />
        <NameSearchPanel />
        <TagSearchPanel />
        <DataPanel />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
