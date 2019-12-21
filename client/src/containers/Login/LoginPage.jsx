import React, { useState, useEffect } from "react";
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
import AuthService from "../../Services/AuthService";

function LoginPage({ classes, history }) {
  useEffect(() => {
    if (AuthService.user) {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      Email: email,
      Password: password
    };
    const loggedIn = await AuthService.login(user);
    if (loggedIn) {
      history.push('/');
    } else {
      setError("Invalid Email or Password");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
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
            <Grid item>
              <p>{error}</p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(LoginPage);
