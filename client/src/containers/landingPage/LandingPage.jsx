import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, withStyles, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "../../components/header/Header";
import DrawerMenu from "../../components/sideMenu/DrawerMenu";
import ItemCard from "../../components/ItemCard/ItemCard";

import styles from "./styles";
import ItemsService from "../../Services/ItemsService";
import AuthService from "../../Services/AuthService";

function LandingPage({ classes }) {
  const [items, setItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    loadItems();
    const user = AuthService.user;
    if(user){
      setIsAdmin(user.isAdmin)
    }
  }, []);
  console.log(isAdmin);
  const loadItems = async () => {
    const items = (await ItemsService.getAllItems()).data.Result;
    setItems(items);
  }

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
            return <ItemCard item={item} onDelete={loadItems} isAdmin={isAdmin} />;
          })}
        </Grid>
        {isAdmin === "True" && <Grid item className={classes.addIcon}>
          <Link to="/addItem">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Grid>}
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(LandingPage);
