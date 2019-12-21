import React from "react";
import styles from "./styles";
import { Link } from "react-router-dom";

import {
  withStyles,
  CardHeader,
  Avatar,
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Button
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
const options = ["Edit", "Delete"];

function ItemCard({ classes, item }) {
  const [open, setOpen] = React.useState(false);
  const [selectedAdminIndex, setselectedAdminIndex] = React.useState(1);

  const anchorRef = React.useRef(null);

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
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        <Paper>
          <MenuList id="split-button-menu" onClick={() => setOpen(!open)}>
            <Grid container>
              <Grid item xs={12}>
                <Button>
                  <Link to="/EditItem">EDIT</Link>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to="/">Delete</Link>
              </Grid>
            </Grid>
          </MenuList>
        </Paper>
      </Popper>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        action={
          <IconButton
            ref={anchorRef}
            onClick={() => setOpen(!open)}
            aria-label="settings"
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader={item.price}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
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
