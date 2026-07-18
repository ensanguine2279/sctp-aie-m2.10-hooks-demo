import { useState, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";

const TAGS = [
  "React",
  "TypeScript",
  "Testing",
  "Performance",
  "Custom Hooks",
  "React Query",
];

function TagSearchPanel() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query);

  const results = useMemo(
    () =>
      TAGS.filter((name) =>
        name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      ),
    [debouncedQuery],
  );

  return (
    <div className="panel">
      <h2>Search Tags</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tags..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul className="result-list">
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p className="status">
        {results.length} result{results.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default TagSearchPanel;
