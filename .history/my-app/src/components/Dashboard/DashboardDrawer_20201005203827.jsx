import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import MiniChartCard from "../GraphWidgets/MiniChartCard";
import Paper from '@material-ui/core/Paper';
import CircleProgress from "../GraphWidgets/graphs/CircleProgress";
import TrackerTable from "./TrackerTable";
import CreateNewFolderIcon from "./CreateNewFolderIcon";
import AddTilesIcon from "./AddTilesIcon";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function DashboardDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}></AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
       


      <p className="PageTitle">Dashboard</p>


        <Grid item container xs={12}>
          <Grid item xs={3}>
            {" "}
         <MiniChartCard></MiniChartCard>
          </Grid>

          <Grid item xs={3}>
            {" "}
         <MiniChartCard></MiniChartCard>
          </Grid>

          <Grid item xs={3}>
            {" "}
         <MiniChartCard></MiniChartCard>
          </Grid>

          <Grid item xs={3}>
            {" "}
         <MiniChartCard></MiniChartCard>
          </Grid>
        </Grid>

<div>

</div>

<Grid item container xs={12} > 

<Grid item xs={3}>
<Paper variant="outlined">
    <CircleProgress></CircleProgress>
</Paper>
{/* WHEN PLACED WITH MORE PAPER THESE MOVE DOWN MAKE LENGTH VARIABLE ECT */}
</Grid>

<Grid item xs={3}>
<Paper variant="outlined">
    <div>
        <p>hi</p>
    </div>
</Paper>
</Grid>

<Grid item xs={3}>
<Paper variant="outlined">
    <div>
        <p>hi</p>
    </div>
</Paper>
</Grid>

<Grid item xs={3}>
<Paper variant="outlined">
    <div>
        <p>hi</p>
    </div>
</Paper>
<Paper variant="outlined">
    <div>
        <p>hi</p>
    </div>
</Paper>
<Paper variant="outlined">
    <div>
        <p>hi</p>
    </div>
</Paper>
</Grid>





</Grid>
<br></br>
<br></br>

<Divider></Divider>

<p className="PageTitle">Tracker Log</p>
<CreateNewFolderIcon></CreateNewFolderIcon>

<TrackerTable></TrackerTable>

      </main>
    </div>
  );
}

export default DashboardDrawer;
