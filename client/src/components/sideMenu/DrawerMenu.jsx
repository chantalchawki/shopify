import React, { useEffect, useState } from "react";

import { List, ListItem, ListItemText, withStyles } from "@material-ui/core";
import styles from "./styles";
import CategoriesService from "../../Services/CategoriesService";

function DrawerMenu({ classes }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const categories = (await CategoriesService.getAllCategories()).data.Result;
    console.log('%%', categories);
    setCategories(categories);
  }

  return (
    <div className={classes.drawer}>
      <List className={classes.list}>
        {categories.map(category => (
          <ListItem button key={category.Id}>
            <ListItemText primary={category.Name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default withStyles(styles)(DrawerMenu);
