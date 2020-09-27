import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import Paper from '@material-ui/core/Paper';
import Premade from './TrackerFolders.jsx'
import Typography from "@material-ui/core/Typography";

function TrackerPage() {
  return (
    // FIX THIS
    <Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
         
          <Heading fontSize={[5, 6]} color="primary">
            Tracker
          </Heading>
         
        </Grid>
        <Grid item xs={6}>
            {/* floats right from heading + padding */}
        <div className="DashboardQuote">
          
          </div>
        </Grid>
      </Grid>

      <br></br>
      <Typography variant="body2" color="textSecondary">
       Take Control of your day and slowly but surley you will take control of your LIFE
      </Typography>
      <br></br>
      <Grid container spacing={3}>
        <Grid item xs={3}>
<div className="Divtop">
<Heading>
  Actvive Trackers
</Heading>

</div>

<Premade></Premade>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>

      <Grid>
        

        <Grid>
       
        </Grid>

        <Grid>
          <br></br>
        </Grid>

        <Grid>
        </Grid>

    
      </Grid>
    </Grid>
  );
}

export default TrackerPage;
