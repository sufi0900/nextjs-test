"use client";
import React from "react";
import { useTheme } from "next-themes";

const Page = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <div
        className={`home ${
          resolvedTheme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        assumenda rem nisi, corrupti quam quaerat in et. Est ratione animi error
        impedit, magni nam dolorum tempora harum, vel voluptatibus mollitia?
      </div>

      <div
        className={`home2 ${
          resolvedTheme === "dark" ? "dark-theme-home2" : "light-theme-home2"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        assumenda rem nisi, corrupti quam quaerat in et. Est ratione animi error
        impedit, magni nam dolorum tempora harum, vel voluptatibus mollitia?
      </div>
    </>
  );
};

export default Page;
