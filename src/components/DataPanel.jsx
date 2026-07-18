import { useDataLoader } from "../hooks/useDataLoader";

function DataPanel() {
  const { data, loading, error } = useDataLoader(
    "http://localhost:3001/contacts",
  );

  if (loading)
    return (
      <div className="panel">
        <h2>Data</h2>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="panel">
        <h2>Data</h2>
        <p className="error">Error: {error}</p>
      </div>
    );

  return (
    <div className="panel">
      <h2>Data</h2>
      <ul className="result-list">
        {data.map((contact) => (
          <li key={contact.id}>
            {contact.name} — {contact.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataPanel;
