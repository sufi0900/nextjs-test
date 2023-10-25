"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeHandler = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`body ${
        resolvedTheme === "dark" ? "dark-theme-body" : "light-theme-body"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeHandler;
