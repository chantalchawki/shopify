import React from "react";
import Header from "../../components/header/Header";
import DrawerMenu from "../../components/sideMenu/DrawerMenu";
import { Grid } from "@material-ui/core";
export default function LandingPage({ classes }) {
  return (
    <Grid container>
      <Header />
      <DrawerMenu />
    </Grid>
  );
}
