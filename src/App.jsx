import { useToggle } from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [isDark, toggleTheme] = useToggle(false);
  const [username, setUsername] = useLocalStorage("user_name", "");

  return (
    <div
      id="app-container"
      className={isDark ? "dark" : "light"}
    >
      <h1>User Settings</h1>

      <button onClick={toggleTheme}>
        Toggle Dark Mode
      </button>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>{username}</p>
    </div>
  );
}

export default App;