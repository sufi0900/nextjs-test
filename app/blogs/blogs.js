/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useTheme } from "next-themes";
import Code from "./code";
const blogs = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div
      className={`body ${
        resolvedTheme === "dark" ? "dark-theme-body" : "light-theme-body"
      }`}
    >
      <Code />
    </div>
  );
};

export default blogs;
