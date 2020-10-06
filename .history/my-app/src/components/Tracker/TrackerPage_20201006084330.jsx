import React from "react";
import { Grid } from "@material-ui/core";
import TrackerPageList from "./TrackerPageList";
import TrackerSvg from "./TrackerSvg";

function TrackerPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        {/* this is where the header will be  */}
        {/* <Header/> */}
      </Grid>
      {/* grids can be items grids containers or both at the same time  */}
      <Grid item container>
        {/* on small screens this will take up 2 but on extra smnall screens this will take up 0 as specified   */}
        <Grid item xs={0} sm={2} />

        <Grid item xs={12} sm={8}>
          {/* this is where the content will be  */}
          {/* <Content/> */}

          <Grid item container>
            <Grid item xs={6}>
              <div className="justifycenter">
                <TrackerSvg></TrackerSvg>
              </div>
            </Grid>

            <Grid item xs={6}>
              <p>Tick.</p>
              <p>Tock.</p>
            </Grid>

            <Grid item xs={12}>
              <TrackerPageList></TrackerPageList>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  );
}

export default TrackerPage;
