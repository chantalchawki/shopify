import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
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
import AuthService from "../../Services/AuthService";
import ExitToAppIcon  from "@material-ui/icons/ExitToApp";

function Header({ classes, history }) {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(AuthService.user);
  }, []);

const logout = async () => {
  await AuthService.logout();
  history.push('/login');
}
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
              <Link to="/profile" className={classes.link}>
              <Typography variant="h6" color="inherit">
                {user.name}
              </Typography>
              </Link>
              <Link to="/cart" className={classes.link}>
                <ShoppingCartIcon
                  className={classes.icon}
                  onClick={() => console.log("pressed")}
                />
              </Link>
              <ExitToAppIcon className={classes.icon} onClick={logout}/>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(withStyles(styles)(Header));
