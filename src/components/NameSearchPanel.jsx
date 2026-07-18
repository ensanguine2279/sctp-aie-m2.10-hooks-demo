import { useState, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";

const CONTACTS = [
  "Alice Tan",
  "Bob Lim",
  "Carol Wong",
  "David Chen",
  "Eve Ng",
  "Frank Ho",
  "Grace Koh",
  "Hassan Ibrahim",
  "Ivan Teo",
  "Keith Tan",
  "Karen Yeo",
  "Leon Goh",
  "Mei Lin Foo",
  "Nathan Seah",
  "Olivia Png",
  "Priya Nair",
  "Quentin Tan",
  "Rachel Sim",
  "Jeff Wee",
  "Tricia Lau",
];

function NameSearchPanel() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query);

  const results = useMemo(
    () =>
      CONTACTS.filter((name) =>
        name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      ),
    [debouncedQuery],
  );

  return (
    <div className="panel">
      <h2>Search Name</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search name..."
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

export default NameSearchPanel;
