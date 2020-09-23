import React from "react";
import MiniChardCard from "./MiniChartCard";
import Container from "@material-ui/core/Container";
import "../App.css";
import NewDashboardCard from "./NewDashboardCard";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "300px",
      height: "150px",
      display: 'flex',
    },

    
function DashboardPage() {
    const classes = useStyles();
    const theme = useTheme();
  return (
    // FIX THIS

    <Container
      //  maxWidth="sm"
      maxHeight="sm"
      ClassName={classes.root}
    >
      <MiniChardCard></MiniChardCard>
      <MiniChardCard></MiniChardCard>
      <MiniChardCard></MiniChardCard>
      <MiniChardCard></MiniChardCard>
      <MiniChardCard></MiniChardCard>
      <NewDashboardCard></NewDashboardCard>
    </Container>
  );
}

export default DashboardPage;
