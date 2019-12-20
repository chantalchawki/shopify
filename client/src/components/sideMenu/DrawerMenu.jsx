import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";
import styles from "./styles";

function DrawerMenu({ classes }) {
  return (
    <div className={classes.drawer}>
      <List className={classes.list}>
        {["Categories"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
export default withStyles(styles)(DrawerMenu);
