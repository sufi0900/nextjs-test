"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Themebutton() {
  const { setTheme, resolvedTheme } = useTheme();

  // Set the theme to "light" when the page loads
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // Save the theme preference in localStorage
    localStorage.setItem("theme", newTheme);
  };
  return <button onClick={toggleTheme}>Toggle Dark Mode</button>;
}
