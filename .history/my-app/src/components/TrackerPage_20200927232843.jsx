import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import Paper from "@material-ui/core/Paper";
import Premade from "./TrackerFolders/Premade";
import Typography from "@material-ui/core/Typography";
import TaskList from "./TrackerFolders/TaskList";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import Fab from "@material-ui/core/Fab";
import TrackerSearch from './TrackerFolders/TrackerSearch'

function TrackerPage() {
  return (
    // FIX THIS
    <Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Heading fontSize={[5, 6]} color="primary">
            Tracker
          </Heading>
        </Grid>
        <Grid item xs={6}>
          {/* floats right from heading + padding */}
          <div className="DashboardQuote"></div>
        </Grid>
      </Grid>

      <br></br>
      <Typography variant="body2" color="textSecondary">
        Take Control of your day and slowly but surley you will take control of
        your Life
      </Typography>
      <br></br>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Fab variant="extended">
            <PlusOneIcon></PlusOneIcon>
            Create New
          </Fab>
          <TrackerSearch></TrackerSearch>
<Grid justify='flex-start' >
<Paper>
  Google Home
</Paper>

<Paper>
  WebHooks
</Paper>


<Paper>
Apple Iphone/Ipad
</Paper>

<Paper>
  ]
</Paper>
</Grid>

        
        </Grid>

        <Grid item xs={2}>
          <div className="Divtop">
            <Heading>All</Heading>
            <TaskList></TaskList>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="Divtop">
            <div className="premade">
              <Premade></Premade>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TrackerPage;
