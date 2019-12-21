import React from "react";
import styles from "./styles";
import {
  withStyles,
  CardHeader,
  Avatar,
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function ItemCard({ classes, item }) {
  const addToCart = item => {
    console.log(item);
    var cartItems;
    if (localStorage.getItem("productsInCart") == null) {
      cartItems = [];
    } else {
      cartItems = JSON.parse(localStorage.getItem("productsInCart"));
    }
    cartItems.push(item);
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.Name}
        subheader={item.Price}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.Description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => addToCart(item)} aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default withStyles(styles)(ItemCard);
