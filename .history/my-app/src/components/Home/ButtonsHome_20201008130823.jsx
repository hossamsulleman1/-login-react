import { makeStyles } from "@material-ui/core/styles";
import TopDrawer from "../Nav/TopDrawer";
import Button from "@material-ui/core/Button";
import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from '@material-ui/core/Avatar';
import DrawerAvatar from "./DrawerAvatar";
import ShareModal from "./ShareModal";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    paddingRight: "20px",
    paddingLeft: "20px",
  },
});

function ButtonsHome() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // top: true,
    left: true,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
<div className="draweravatar">
 <DrawerAvatar></DrawerAvatar>
 
  
</div>

<div className="draweravatar">
<p className="subHeading">NAME</p>
 
  
</div>


<Divider />
<List>
            {["Home", "Tracker", "Review", "Profile", "Dashboard", "Life Coach"].map(
              // LINK THESE TO PAGES 
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div>
      {["left", 
      // "right", 
      // "top",
      //  "bottom"
      ].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* BUTTONS HERE OMDS */}
          <div className={classes.root}>


            <div className="flex">

            <div className="Padding">
            <Button className={classes.button} variant="outlined" onClick={toggleDrawer(anchor, true)}>
            Explore
          </Button>
            </div>
      
      <div className="padding">
      {/* <Button variant="contained" color="primary">
            Invite A Friend
          </Button> */}
     <ShareModal></ShareModal>
      </div>
            </div>
      
        
          </div>
         
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ButtonsHome;
