import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import Grid from "@material-ui/core/Grid";

function DashboardPage() {
  return (
    // FIX THIS
    <Div >
  <Grid justify="space-evenly">
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
      </Grid>

      <NewDashboardCard></NewDashboardCard>
    
      </Div>
  );
}

export default DashboardPage;
