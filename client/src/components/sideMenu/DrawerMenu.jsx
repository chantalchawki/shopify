import React from "react";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
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
    <React.Fragment>
      <Drawer variant="permanent" open={true} className={classes.drawer}>
        <div className={classes.toolbar} />
        <List>
          {["Categories"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
DrawerMenu.propTypes = {};

export default withStyles(styles)(DrawerMenu);
