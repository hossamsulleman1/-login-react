import React from "react";
import MiniChardCard from "./MiniChartCard";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";

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
        
        
      </div>

      <Grid>
        {/* get rid of this random elemnet lol newsdash */}
        <NewDashboardCard></NewDashboardCard>

        <Grid>
          {/* grid for Icons Eg sport ect have user add icons and names to them for pages they want ect */}
        </Grid>

        <Grid justify="space-evenly">{/* main grid for graphs ect  */}</Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
