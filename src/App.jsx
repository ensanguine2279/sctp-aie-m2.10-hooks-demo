// src/App.jsx
import { useContext, useState, useMemo } from "react";

import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";

import AuthPanel from "./components/AuthPanel";
import NameSearchPanel from "./components/NameSearchPanel";
import TagSearchPanel from "./components/TagSearchPanel";
import ContactDataPanel from "./components/ContactDataPanel";
import TagDataPanel from "./components/TagDataPanel";

// ─── App Root ──────────────────────────────────────────────────────────────────
function AppContent() {
  return (
    <div className="app">
      <h1>hooks-demo</h1>
      <div className="panels">
        <AuthPanel />
        <NameSearchPanel />
        <TagSearchPanel />
        <ContactDataPanel />
        <TagDataPanel />
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
