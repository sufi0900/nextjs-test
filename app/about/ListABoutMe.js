"use client";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useTheme } from "next-themes";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MosqueIcon from "@mui/icons-material/Mosque";
import TodayIcon from "@mui/icons-material/Today";
import FlagIcon from "@mui/icons-material/Flag";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

import AbcIcon from "@mui/icons-material/Abc";
import { Cake, LanguageOutlined, Mail } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";

export default function InteractiveList() {
  const { resolvedTheme } = useTheme();
  const [secondary, setSecondary] = useState(false);
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <br />
      <div className="custom-input-color About3">
        <h2>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={(event) => setSecondary(event.target.checked)}
                  className={` About ${
                    resolvedTheme === "dark"
                      ? "dark-theme-textcolor"
                      : "light-theme-textcolor"
                  }`}
                  style={{ color: "white" }}
                />
              }
              label="Click Show Basic info"
              className={` About ${
                resolvedTheme === "dark"
                  ? "dark-theme-textcolor"
                  : "light-theme-textcolor"
              }`}
            />
          </FormGroup>
        </h2>
      </div>
      <Grid container spacing={2} sx={{ display: "flex", overflow: "auto" }}>
        <Grid item xs={6} md={6} sm={12} lg={12}>
          <div
            className={`About3  ${
              resolvedTheme === "dark"
                ? "dark-theme-textcolor"
                : "light-theme-textcolor"
            }`}
          >
            <p>My Basic Info</p>
          </div>
          <Box
            sx={{
              display: "flex",
              alignContent: "space-between",
              gap: "60px",
            }}
          >
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <AbcIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Full Name"}
                    secondary={secondary ? "SuFian Mustafa" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <TodayIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Age"}
                    secondary={secondary ? "27" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <Cake
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Date of Birth"}
                    secondary={secondary ? "6 Sep, 1997" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <MosqueIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Religious"}
                    secondary={secondary ? "Islam (Sunni)" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <CodeIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Interest"}
                    secondary={secondary ? "Web Development" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <InfoIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Experience"}
                    secondary={
                      secondary ? "1year Plus ( started from june 2022)" : null
                    }
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <LocalPhoneIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Phone Number"}
                    secondary={secondary ? "+923177652064" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <Mail
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Email"}
                    secondary={secondary ? "sufianmustafa0900@gmail.com" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <FlagIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Country"}
                    secondary={secondary ? "Pakistan (KPK)" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <SportsEsportsIcon
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Hobby"}
                    secondary={secondary ? "Video Games" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                  >
                    <LanguageOutlined
                      className={` About ${
                        resolvedTheme === "dark"
                          ? "dark-theme-textcolor"
                          : "light-theme-textcolor"
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    className={` About ${
                      resolvedTheme === "dark"
                        ? "dark-theme-textcolor"
                        : "light-theme-textcolor"
                    }`}
                    primary={"Language"}
                    secondary={secondary ? "English & Urdu" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
