import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import Grid from "@material-ui/core/Grid";

function DashboardPage() {
  return (
    // FIX THIS
    <div className="MiniChartDivFlex">
        <MiniChardCard></MiniChardCard>
        <MiniChardCard></MiniChardCard>

      <NewDashboardCard></NewDashboardCard>
    
      
  );
}

export default DashboardPage;
