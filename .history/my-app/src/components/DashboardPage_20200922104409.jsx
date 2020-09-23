import React from "react";
import MiniChardCard from "./MiniChartCard";
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
          
          
          
          <Grid>
{/* grid for Icons Eg sport ect have user add icons and names to them for pages they want ect */}
          </Grid>
          {/* get rid of this random elemnet lol newsdash */}
                  <NewDashboardCard></NewDashboardCard>
        </Grid>


    </Grid>
   
    
      
  );
}

export default DashboardPage;
