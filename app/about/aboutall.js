/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import About from "./aboutcode";
import dynamic from "next/dynamic";
import SlideM from "./slideshowmbl";
import { useMediaQuery, useTheme } from "@mui/material";
const ComponentA = dynamic(() => import("./responsiveshow"));
const ComponentB = dynamic(() => import("./slideshowlg"));
const aboutall = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div>
      <About />
      <ComponentA />
      {isMatch ? (
        <>
          <SlideM />{" "}
        </>
      ) : (
        <>
          <ComponentB />

          <br />
        </>
      )}
    </div>
  );
};

export default aboutall;
