import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Button,
  Typography,
  CssBaseline,
  Toolbar,
  withStyles,
  AppBar,
  Grid
} from "@material-ui/core";

import styles from "./styles";

function Header({ classes }) {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser({});
  }, []);
  return (
    <div container className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" className={classes.title}>
              Shopify
            </Typography>
          </Link>
          {!user ? (
            <Grid container className={classes.rightGrid} alignItems="center">
              <Grid items>
                <Link className={classes.link} color="white" to="/login">
                  LOGIN
                </Link>
              </Grid>
              <Grid item>
                <Button className={classes.btn} type="primary">
                  <Link className={classes.link} to="/register">
                    REGISTER
                  </Link>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container className={classes.rightGrid} alignItems="center">
              <Typography variant="h6" color="inherit">
                user
              </Typography>
              <Link to="/cart" className={classes.link}>
                <ShoppingCartIcon
                  className={classes.icon}
                  onClick={() => console.log("pressed")}
                />
              </Link>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(styles)(Header);
