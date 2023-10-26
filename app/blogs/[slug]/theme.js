"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeHandler = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`About3 ${
        resolvedTheme === "dark"
          ? "dark-theme-textcolor"
          : "light-theme-textcolor"
      }`}
    ></div>
  );
};

export default ThemeHandler;
