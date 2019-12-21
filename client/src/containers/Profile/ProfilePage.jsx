import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
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
import PersonIcon from "@material-ui/icons/Person";
import AuthService from "../../Services/AuthService";
import UsersService from "../../Services/UsersService";

import styles from "./styles";

function ProfilePage({ classes, history }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  
  useEffect(() => {
    const user = AuthService.user;
    setName(user.name);
    setAddress(user.address);
    setMobile(user.mobile);
  }, []);

  const handleSubmit = async (event, props) => {
    event.preventDefault();
    const u = AuthService.user;
    const user = {
      Id: u.id,
      Area: u.area,
      Name: name,
      Address: address,
      Mobile: mobile
    }
    await UsersService.UpdateUser(user);
    await AuthService.logout();
    history.push('/');
  };

  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.header}>
        <Header />
      </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
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
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="mobile"
                  label="Mobile"
                  id="mobile"
                  autoComplete="mobile"
                  value={mobile}
                  onChange={e => setMobile(e.target.value)}
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
              Edit
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}

export default withStyles(styles)(ProfilePage);
