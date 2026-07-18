import { useDataLoader } from "../hooks/useDataLoader";

function TagDataPanel() {
  const { data, loading, error } = useDataLoader("http://localhost:3001/tags");

  if (loading)
    return (
      <div className="panel">
        <h2>Tag Data</h2>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="panel">
        <h2>Tag Data</h2>
        <p className="error">Error: {error}</p>
      </div>
    );

  return (
    <div className="panel">
      <h2>Tag Data</h2>
      <ul className="result-list">
        {data.map((tag) => (
          <li key={tag.id}>
            {tag.id} — {tag.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagDataPanel;
