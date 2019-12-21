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

function RegistrationPage({ classes }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (event, props) => {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      area: area,
      address: address,
      mobile: mobile
    };
    UsersService.register(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                autoComplete="mobile"
                onChange={e => setMobile(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
                onChange={e => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="area"
                label="Area"
                id="area"
                autoComplete="area"
                onChange={e => setArea(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withStyles(styles)(RegistrationPage);
