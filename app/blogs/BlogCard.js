/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import { useTheme } from "next-themes";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import { motion } from "framer-motion";
import { urlFor } from "../lib/sanityImageUrl";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Card } from "@mui/material";

export default function RecipeReviewCard({ postimg, title, slug }) {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <Grid
        item
        lg={4}
        sm={6}
        xl={3}
        md={4}
        xs={12}
        padding={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Card
          className={` BlogCard ProjectCard item ${
            resolvedTheme === "dark" ? "dark-theme-item" : "light-theme-item"
          }`}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                S
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <div
                className={` blogcardh1 ${
                  resolvedTheme === "dark"
                    ? "dark-theme-textcolor"
                    : "light-theme-textcolor"
                }`}
                style={{ display: "inline-block" }}
              >
                <h1 style={{ fontSize: "22px", margin: 0 }}>Sufian Mustafa</h1>
              </div>
            }
          />
          {/* <p> {date}</p> */}

          <div
            className={` CardHeading  ${
              resolvedTheme === "dark"
                ? "dark-theme-textcolor"
                : "light-theme-textcolor"
            }`}
          >
            {" "}
            <h1 style={{ left: "0%", fontSize: "22px" }}> {title} </h1>
          </div>

          <img
            src={urlFor(postimg).url()}
            alt="blogImg"
            style={{
              height: "250px",
              width: "97%",
              borderRadius: "20px",
            }}
          />

          <Link
            href={`/blogs/${slug.current}`}
            className={` themecard  ${
              resolvedTheme === "dark"
                ? "dark-theme-textcolor"
                : "light-theme-textcolor"
            }`}
          >
            <p
              className={` themecard  ${
                resolvedTheme === "dark"
                  ? "dark-theme-textcolor"
                  : "light-theme-textcolor"
              }`}
            >
              Read More..
            </p>
          </Link>

          <Divider />
          <br></br>
        </Card>
      </Grid>
    </>
  );
}
