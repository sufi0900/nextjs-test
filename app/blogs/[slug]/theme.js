"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeHandler = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`About3 ${
        resolvedTheme === "dark"
          ? "dark-theme-textcolor"
          : "light-theme-textcolor"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeHandler;
