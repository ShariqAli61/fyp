import { FaMoon, FaSun, FaPalette } from "react-icons/fa";

function TopBar({ setDarkMode, darkMode, setThemeColor, themeColor }) {
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">Student Dashboard</div>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
        <button onClick={() => setThemeColor(themeColor === "blue" ? "green" : themeColor === "green" ? "purple" : themeColor === "purple" ? "default" : "blue")}>
          <FaPalette size={24} />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
