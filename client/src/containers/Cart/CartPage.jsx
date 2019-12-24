import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Avatar,
  CssBaseline,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";
import Header from "../../components/header/Header";

function CartPage({ classes, history }) {
  const [items, setItems] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("productsInCart")));
  }, []);

  useEffect(() => {
    if (items) {
      let tempTotal = 0;
      items.map(item => {
        return (tempTotal += parseInt(item.Price));
      });
      setTotal(tempTotal);
      localStorage.setItem("productsInCart", JSON.stringify(items));
    }
  }, [items]);

  const removeItem = i => {
    var idx = items.indexOf(i);
    console.log(idx, items);
    setItems(items.filter((item, index) => index !== idx));
  };
  const AddItem = i => {
   let cartItems = JSON.parse(localStorage.getItem("productsInCart"));
   cartItems.push(i);
   setItems(cartItems); 
   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  };
  return (
    <React.Fragment>
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cart
          </Typography>
          {items && items.length > 0 ? (
            <Grid container justify="center" className={classes.content}>
              <Grid item className={classes.list}>
                <List>
                  {items.map(item => {
                    return (
                      <ListItem>
                        <ListItemText>{item.Name}</ListItemText>
                        <ListItemText align="end">
                          {item.Price + " L.E"}
                        </ListItemText>
                        <IconButton
                          onClick={() => removeItem(item)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => AddItem(item)}
                          edge="end"
                          aria-label="delete"
                        >
                          <AddIcon />
                        </IconButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item>
                <Typography align="right"> Total = {total + " L.E"}</Typography>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => history.push("/checkOut")}
                >
                  Proceed
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container justify="center">
              <Grid item>
                <Typography align="center" variant="h5">
                  Nothing in your Cart
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Back to shopping
                  </Button>
                </Link>
              </Grid>
            </Grid>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default withStyles(styles)(CartPage);
