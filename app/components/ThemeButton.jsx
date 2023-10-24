"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon

import Switch from "react-switch"; // Import the react-switch component

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  // Set the theme to "light" when the page loads
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Switch
      onChange={toggleTheme}
      checked={resolvedTheme === "dark"}
      offColor="#bbbbbb" // Light mode color
      onColor="#000000" // Dark mode color
      checkedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1.5px" }}
        >
          <Brightness3Icon style={{ color: "white" }} /> {/* Moon icon */}
        </div>
      }
      uncheckedIcon={
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "2px" }}
        >
          <WbSunnyIcon /> {/* Sunlight icon */}
        </div>
      }
    />
  );
};

export default DarkModeToggle;
