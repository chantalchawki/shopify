import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import styles from "./styles";
import Header from "../../components/header/Header";

function page404({ classes }) {
  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.header}>
        <Header />
      </Grid>
      <Grid container className={classes.main}>
        <i></i>
        <h1 className="font-weight-bold slogan mt-4">404</h1>
        <h2 className="font-weight-light slogan">Page not found</h2>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(page404);
