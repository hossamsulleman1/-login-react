import React from "react";
import MiniChardCard from "./MiniChartCard";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import CircleProgress from './GraphWidgets/graphs/CircleProgress'
import Dashboard

function DashboardPage() {
  return (
    // FIX THIS
    <Grid>
      <Heading fontSize={[5, 6, 7]} color="primary">
        Dashboard
      </Heading>
      <div className="MiniChartDivFlex">
        {/* fav charts bar */}
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        {/* max number of cards w this size */}
        
      </div>

      <Grid>
        {/* get rid of this random elemnet lol newsdash */}

        {/* <NewDashboardCard></NewDashboardCard> */}

<Grid>
    {/* Daily Tracker Div */}
<Heading>Daily Tracker</Heading>
<CircleProgress></CircleProgress>
</Grid>

        <Grid>
          {/* grid for Icons Eg sport ect have user add icons and names to them for pages they want ect */}
        
        </Grid>

        <Grid justify="space-evenly">{/* main grid for graphs ect  */}</Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
