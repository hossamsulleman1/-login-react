import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";

import Typography from "@material-ui/core/Typography";

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
        <div className="DashboardQuote">
          
          </div>
        </Grid>
      </Grid>

      <br></br>
      <Typography variant="body2" color="textSecondary">
       Take Control of your day take control of your Life
      </Typography>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <MiniChardCard></MiniChardCard>
        </Grid>
        <Grid item xs={3}>
          <MiniChardCard></MiniChardCard>
        </Grid>
        <Grid item xs={3}>
          <MiniChardCard></MiniChardCard>
        </Grid>
        <Grid item xs={3}>
          <MiniChardCard></MiniChardCard>
        </Grid>
      </Grid>

      <Grid>
        {/* get rid of this random elemnet lol newsdash */}

        {/* <NewDashboardCard></NewDashboardCard> */}

        <Grid>
          {/* grid for Icons Eg sport ect have user add icons and names to them for pages they want ect */}
          {/* <DashboardNav></DashboardNav> */}
        </Grid>

        <Grid>
          {/* Daily Tracker Div */}
          <br></br>
          {/* <CircleProgress></CircleProgress> */}
        </Grid>

        <Grid>
          {/* https://formidable.com/open-source/victory/gallery/stacked-histogram */}
        </Grid>

        {/* <Grid justify="space-evenly"> */}
        {/* main grid for graphs ect  */}
        {/* </Grid> */}

        <NestedGrid></NestedGrid>
      </Grid>
    </Grid>
  );
}

export default TrackerPage;
