import React from "react";
import MiniChardCard from "./MiniChartCard";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import CircleProgress from './GraphWidgets/graphs/CircleProgress'
import DashboardNav from './DashboardNav'
import NestedGrid from './NestedGrid'
import Typography from "@material-ui/core/Typography";



function DashboardPage() {
  return (
    // FIX THIS
    <Grid>
      <Heading fontSize={[5, 6, 7]} color="primary">
        Dashboard
      </Heading>
      <Typography variant="body2" color="textSecondary">
                  Total
                </Typography>
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
<Heading>Daily Tracker</Heading>
{/* <CircleProgress></CircleProgress> */}
</Grid>

      <Grid>
      {/* https://formidable.com/open-source/victory/gallery/stacked-histogram */}

      </Grid>

        {/* <Grid justify="space-evenly"> */}
          {/* main grid for graphs ect  */}
          {/* </Grid> */}

       <NestedGrid>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>
<MiniChardCard></MiniChardCard>


       </NestedGrid>


      </Grid>
    </Grid>
  );
}

export default DashboardPage;
