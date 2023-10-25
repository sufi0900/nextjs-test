/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useTheme } from "next-themes";
import About from "./aboutall";
const aboutall0 = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className={`body ${
        resolvedTheme === "dark" ? "dark-theme-body" : "light-theme-body"
      }`}
    >
      <About />
    </div>
  );
};

export default aboutall0;
