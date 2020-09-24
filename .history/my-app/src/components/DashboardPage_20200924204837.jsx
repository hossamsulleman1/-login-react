import React from "react";
import MiniChardCard from "./MiniChartCard";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import CircleProgress from './GraphWidgets/graphs/CircleProgress'
import DashboardNav from './DashboardNav'

function DashboardPage() {
  return (
    // FIX THIS
    <Grid>
      <Heading fontSize={[5, 6, 7]} color="primary">
        Dashboard
      </Heading>
      <Grid container spacing={3}>
        <Grid item xs={3}>
         <MiniChardCard></MiniChardCard>
        </Grid>
        <Grid item xs={3}>
<MiniChardCard></MiniChardCard>       
 </Grid>
        <Grid item xs={3}>
            <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>

      <Grid>
        {/* get rid of this random elemnet lol newsdash */}

        {/* <NewDashboardCard></NewDashboardCard> */}


        <Grid>
          {/* grid for Icons Eg sport ect have user add icons and names to them for pages they want ect */}
        <DashboardNav></DashboardNav>
        </Grid>

<Grid>
    {/* Daily Tracker Div */}
<Heading>Daily Tracker</Heading>
<CircleProgress></CircleProgress>
</Grid>

      <Grid>
      {/* https://formidable.com/open-source/victory/gallery/stacked-histogram */}

      </Grid>

        <Grid justify="space-evenly">{/* main grid for graphs ect  */}</Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
