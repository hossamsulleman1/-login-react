import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";



function DashboardPage() {

  return (
    // FIX THIS
    <div>
      <Grid justify="space-evenly">
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
      </Grid>

      <NewDashboardCard></NewDashboardCard>
    </div>
  );
}

export default DashboardPage;
