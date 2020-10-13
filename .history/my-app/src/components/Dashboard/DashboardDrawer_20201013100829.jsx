import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import MiniChartCard from "../GraphWidgets/MiniChartCard";
import CircleProgress from "../GraphWidgets/graphs/CircleProgress";
import TrackerTable from "./TrackerTable";
import CreateNewFolderIcon from "./CreateNewFolderIcon";
import AddTilesIcon from "./AddTilesIcon";
import ChoreList from "./ChoreList";
import Goals from "./Goals";
import Card from "@material-ui/core/Card";
// import ImportContactsIcon from "@material-ui/icons/ImportContacts";

import QuotePremadeSelection from "./QuotePremadeSelection";
import RadarChart from "../GraphWidgets/graphs/RadarChart";
import PieWithLabel from "../GraphWidgets/graphs/PieWithLabel";
import IconWBadge from "./IconWBadge";

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
  PaperTile: {
    background: "#FAFAFA",
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
          {/* <List> */}
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <div>
            <p className="SubHeading">WELCOME BACK...</p>
            <IconWBadge></IconWBadge>
          </div>

          <Divider />
          <List>
            {["Home", "Tracker", "Review", "Profile", "Dashboard", "Life Coach",""].map(
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
        </div>
      </Drawer>
      <main className={classes.content}>
        <Grid item container>
          <Grid xs={12}>
            <p className="SubHeading">DAILY DOSAGE</p>
            <QuotePremadeSelection></QuotePremadeSelection>
          </Grid>
        </Grid>

        <p className="HomeTitleDashboard">DASHBOARD</p>

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

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="displayflex">
              <div className="iconbuttondiv">
                <p className="PageTitle">Tiles</p>
                <AddTilesIcon></AddTilesIcon>
              </div>
            </div>

            <div className="displayflex">
              <div className="Tilesdivpadding">
                <Card
                  className={classes.PaperTile}
                  elevation={0}
                  variant="outlined"
                >
                  <CircleProgress></CircleProgress>
                </Card>
              </div>

              {/* WHEN PLACED WITH MORE Card  THESE MOVE DOWN MAKE LENGTH VARIABLE ECT */}
              <div className="Tilesdivpadding">
                <Card
                  className={classes.PaperTile}
                  elevation={0}
                  variant="outlined"
                >
                  <ChoreList></ChoreList>
                </Card>
              </div>

              <div className="Tilesdivpadding">
                <Card
                  className={classes.PaperTile}
                  elevation={0}
                  variant="outlined"
                >
                  <PieWithLabel></PieWithLabel>
                </Card>
              </div>

              {/* START DRAG & DROP */}
              <div className="Tilesdivpadding">
                <Card
                  className={classes.PaperTile}
                  elevation={0}
                  variant="outlined"
                >
                  <Goals></Goals>
                </Card>
              </div>
              {/* END  */}

              <div className="Tilesdivpadding">
                <Card
                  className={classes.PaperTile}
                  elevation={0}
                  variant="outlined"
                >
                  <RadarChart></RadarChart>
                </Card>
              </div>
            </div>
          </Grid>
        </Grid>

        <br></br>
        <br></br>

        <Divider></Divider>
        <div>
          <div className="iconbuttondiv">
            <p className="PageTitle">Tracker Log</p>
            <CreateNewFolderIcon></CreateNewFolderIcon>
          </div>
        </div>

        <TrackerTable></TrackerTable>
      </main>
    </div>
  );
}

export default DashboardDrawer;
