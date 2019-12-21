import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

import {
  Grid,
  withStyles,
  FormControlLabel,
  Button,
  TextField,
  CssBaseline,
  Container,
  Typography,
  Avatar
} from "@material-ui/core";
import styles from "./styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import PaymentIcon from "@material-ui/icons/Payment";

function CheckOutPage({ classes }) {
  const [isPayPal, setisPayPal] = useState(false);

  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.header}>
        <Header />
      </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PaymentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Payment Method
          </Typography>

          <FormControl className={classes.checkOutForm}>
            <Typography component="h3">How would you like to pay?</Typography>
            <RadioGroup>
              <FormControlLabel
                value="CreditCard"
                control={<Radio />}
                onClick={() => {
                  setisPayPal(true);
                }}
                label="Pay With Visa"
              />
              <div>
                {isPayPal == true ? (
                  <FormControl>
                    <div className={classes.VisaForm}>
                      <TextField
                        required
                        fullWidth
                        label="Card Number"
                        variant="outlined"
                        id="standard-basic"
                      />
                    </div>
                    <div className={classes.VisaForm}>
                      <TextField
                        required
                        variant="outlined"
                        label="Pin Number"
                        id="standard-basic"
                      />
                    </div>
                  </FormControl>
                ) : (
                  ""
                )}
              </div>
              <FormControlLabel
                value="Cash"
                control={<Radio />}
                label="Cash On Delivery"
                onClick={() => {
                  setisPayPal(false);
                }}
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Place Order
          </Button>
        </div>
      </Container>
    </Grid>
  );
}

export default withStyles(styles)(CheckOutPage);
