import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
justifyContent: "space-evenly",
width: "100%",
    }
}));

function DashboardPage() {
    const classes = useStyles();
    const theme = useTheme();
  return (
    // FIX THIS
<div>

</div>
 
 );
}

export default DashboardPage;
