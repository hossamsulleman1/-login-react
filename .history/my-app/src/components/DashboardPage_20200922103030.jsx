import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import Grid from "@material-ui/core/Grid";

function DashboardPage() {
  return (
    // FIX THIS
    <Grid>

<div className="MiniChartDivFlex">
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>
        </div>
      
      <Grid>
        </Grid>


    </Grid>
   
    
      
  );
}

export default DashboardPage;
