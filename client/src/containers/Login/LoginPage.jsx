import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  TextField,
  Typography,
  Avatar,
  CssBaseline,
  Container
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import styles from "./styles";
import UsersService from "../../Services/UsersService";

function LoginPage({ classes }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event, props) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password
    };
    let res = UsersService.login(user);
    localStorage.setItem("token", res.data.token);
  };

  const googleLogin = async () => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: "126151922298-jv8d5mev97sho4qb7ns97qt3hmibampb.apps.googleusercontent.com",
        })
        .then(() => {
          window.gapi.signin2.render("my-signIn", {
            scope: "profile email",
            width: 250,
            height: 50,
            longtitle: false,
            theme: "dark",
            onsuccess: console.log,
            onfailure: console.log
          });
        });
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div id="my-signIn" />
      <button onClick={googleLogin}>Google</button>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(LoginPage);
