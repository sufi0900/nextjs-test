"use client";
import React from "react";

import Card from "@mui/material/Card";
import { urlFor } from "@/app/lib/sanityImageUrl";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import Grid from "@mui/material/Grid";
import Link from "next/link";

const h5 = {
  color: "black",
  textDecoration: "underline",
  cursor: "pointer",
  "&:hover": {
    color: "blue",
    transform: "translateZ(50px)",
  },
};

const project = {
  transition: "0.3s",
  borderRadius: "20px",
  overflow: "visible",
};

const ProjectCard = ({ title, projectimg1, slug }) => {
  return (
    <>
      <Grid
        item
        lg={4}
        sm={6}
        xl={3}
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
        padding={3}
      >
        <Card className="ProjectCard item" style={project}>
          <div
            className="ProjectCardInner"
            style={{
              position: "relative",
              bottom: "10px",
            }}
          >
            <motion.div
              className="Top_Circle"
              animate={{
                y: [-10, 10],
                background: [
                  "hsla(326, 100%, 50%, 1)",
                  "hsla(264, 100%, 50%, 1)",
                ],
              }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>{" "}
            <h1
              style={{
                left: "0%",
                fontSize: "22px",
                fontWeight: "bolder",
                top: "12px",
              }}
              className="projectcardtitle"
            >
              {title}
            </h1>
          </div>{" "}
          <img
            src={urlFor(projectimg1).url()}
            style={{
              height: "270px",
              width: "97%",
              borderRadius: "10px",
            }}
          />
          <CardActions
            disableSpacing
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Link
              href={`/projects/${slug.current}`}
              className="themecard custom-input-color"
            >
              <p className="themecard">Read More..</p>
            </Link>
          </CardActions>
          <motion.div
            className="Bottom_Circle"
            animate={{
              x: [10, -10],
              backgroundColor: [
                "hsla(326, 100%, 50%, 1))",
                "hsla(264, 100%, 50%, 1)",
              ],
            }}
            transition={{
              ease: "linear",
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>
        </Card>
      </Grid>
    </>
  );
};
export default ProjectCard;
