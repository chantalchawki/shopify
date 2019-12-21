import React, { useState } from "react";
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
import styles from "./styles";

function ProfilePage({ classes }) {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const handleSubmit = (event, props) => {
    event.preventDefault();
  };

  const profile = {
    name: "mariam",
    mail: "gmail",
    mobile: "01294727",
    password: "SDf",
    address: "Aef",
    area: "dfdssf"
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
            Profile
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={profile.name}
                  onChange={e => setFName(e.target.value)}
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
                  value={profile.mail}
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
                  value={profile.password}
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
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
                  value={profile.address}
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
                  value={profile.mobile}
                  onChange={e => setMobile(e.target.value)}
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
                  value={profile.area}
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
              Edit
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
}

export default withStyles(styles)(ProfilePage);
