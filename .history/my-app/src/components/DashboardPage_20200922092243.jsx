import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
width: "100%",
height: "200px",
    }
}));

function DashboardPage() {
    const classes = useStyles();
    const theme = useTheme();
  return (
    // FIX THIS
<div>
<Grid alignContent="">
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
