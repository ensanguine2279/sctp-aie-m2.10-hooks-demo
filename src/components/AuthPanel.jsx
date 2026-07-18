import { useContext, useState, useMemo } from "react";

import { AuthProvider } from "../contexts/AuthContext";
import { useAuth } from "../hooks/useAuth";

function AuthPanel() {
  const { currentUser, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const ok = login(username, password);
    if (!ok) setError("Invalid username or password.");
    else setError("");
  };

  if (currentUser) {
    return (
      <div className="panel auth-panel">
        <h2>Auth</h2>
        <p>
          Logged in as <strong>{currentUser.name}</strong>
        </p>
        <p>
          Role: <strong>{currentUser.role}</strong>
        </p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div className="panel auth-panel">
      <h2>Auth</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p className="status">Try: admin / password</p>
    </div>
  );
}

export default AuthPanel;
