import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Button,
  Typography,
  CssBaseline,
  Toolbar,
  withStyles,
  AppBar
} from "@material-ui/core";

import styles from "./styles";

function Header({ classes }) {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser();
  }, []);
  return (
    <div container className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shopify
          </Typography>
          {!user ? (
            <React.Fragment>
              <Link className={classes.link} color="white" to="/login">
                LOGIN
              </Link>
              <Button className={classes.btn} type="primary">
                <Link className={classes.link} to="/register">
                  REGISTER
                </Link>
              </Button>
            </React.Fragment>
          ) : (
            <Typography variant="h6" color="inherit">
              user
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
Header.propTypes = {
  classes: PropTypes.shape().isRequired
};
export default withStyles(styles)(Header);
