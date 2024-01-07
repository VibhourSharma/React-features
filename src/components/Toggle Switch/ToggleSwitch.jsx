import "./ToggleSwitch.css";
import { useState } from "react";

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const URL =
    "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="toggle-container">
      <div className={`toggle-card ${isDarkMode ? "dark" : "light"}`}>
        <div className={`toggle-switch ${isDarkMode ? "dark" : "light"}`}>
          <input
            type="checkbox"
            id="modeToggle"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <label htmlFor="modeToggle"></label>
        </div>
        <div className="image-container">
          <img src={URL} alt="Lion Image" />
        </div>
        <h2>Day 5</h2>
        <p>Majestic and powerful, the lion commands the wild.</p>
        <button>Description</button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
