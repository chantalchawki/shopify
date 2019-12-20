import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, withStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "../../components/header/Header";
import DrawerMenu from "../../components/sideMenu/DrawerMenu";
import ItemCard from "../../components/ItemCard/ItemCard";

import styles from "./styles";
function LandingPage({ classes }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        name: "itemName",
        price: "1.0 L.E",
        description: "Khaled Khaled Ana 3ayz Pepsiii"
      },
      {
        name: "itemName",
        price: "1.0 L.E",
        description: "Khaled Khaled Ana 3ayz Pepsiii"
      },
      {
        name: "itemName",
        price: "1.0 L.E",
        description: "Khaled Khaled Ana 3ayz Pepsiii"
      },
      {
        name: "itemName",
        price: "1.0 L.E",
        description: "Khaled Khaled Ana 3ayz Pepsiii"
      },
      {
        name: "itemName",
        price: "1.0 L.E",
        description: "Khaled Khaled Ana 3ayz Pepsiii"
      }
    ]);
  }, []);
  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.header}>
        <Header />
      </Grid>
      <Grid container className={classes.main}>
        <Grid item xs={2} className={classes.sideMenu}>
          <DrawerMenu />
        </Grid>
        <Grid
          xs={10}
          item
          className={classes.content}
          alignContent="space-between"
        >
          {items.map(item => {
            return <ItemCard item={item} />;
          })}
        </Grid>
        <Grid item className={classes.addIcon}>
          <Link to="/addItem">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(LandingPage);
