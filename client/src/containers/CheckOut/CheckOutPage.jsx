import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Header from "../../components/header/Header";
import OrdersService from "../../Services/OrdersService";
import AuthService from "../../Services/AuthService";

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

function CheckOutPage({ classes, history }) {
  const [isPayPal, setisPayPal] = useState(false);
  const [total, setTotal] = useState(0);
  const paypalClientId = 'AYV-QGkYRL1sa4hUPIWOuOfeFJEZaNs3NCAc-KBlzYCsg6o8AKKV3ph9Xtg-FyminRQ7pYslo09V_mwm';
  const products = JSON.parse(localStorage.getItem('productsInCart'));

  useEffect(() => {
    const t = products.reduce((prev, i) => prev + i.Price, 0);
    setTotal(t);
  }, []);

  const submitCart = async () => {
    const res = await OrdersService.createOrder({
      Price: total,
      UserId: +AuthService.user.id,
      Items: products,
    });

    if (res.status === 201) {
      history.push('/');
    }
  }

  const paypalSuccess = async (details, data) => {
    console.log('Details', details);
    console.log('Data', data);

    const res = await OrdersService.createOrder({
      Price: total,
      UserId: +AuthService.user.id,
      Items: products,
    });

    if (res.status === 201) {
      history.push('/');
    }
  }

  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.header}>
        <Header />
      </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <h4>Total: {total}</h4>
          <Avatar className={classes.avatar}>
            <PaymentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Payment Method
          </Typography>

          <FormControl className={classes.checkOutForm}>
            <Typography component="h3">How would you like to pay?</Typography>
            <RadioGroup>
              {/* <FormControlLabel
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
              </div> */}
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
          <PayPalButton
            amount={total}
            onSuccess={paypalSuccess}
            options={{
              clientId: paypalClientId
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitCart}
          >
            Place Order
          </Button>
        </div>
      </Container>
    </Grid>
  );
}

export default withStyles(styles)(CheckOutPage);
