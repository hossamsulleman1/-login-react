import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopDrawer from '../Nav/TopDrawer'
import Button from "@material-ui/core/Button";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";





const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonsHome() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Invite A Friend
      </Button>

      <Button variant="outlined" onClick={toggleDrawer(anchor, true)}>
        Read Docs
      </Button>
    </div>
  );
}

export default ButtonsHome;
