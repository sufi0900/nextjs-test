"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeHandler = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`item itemabout ${
        resolvedTheme === "dark" ? "dark-theme-item" : "light-theme-item"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeHandler;
