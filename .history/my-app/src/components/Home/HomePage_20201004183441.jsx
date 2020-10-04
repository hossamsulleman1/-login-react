import React from "react";
import { Heading } from "rebass";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IntroPara from "./IntroPara";
import HomeSvg from "./HomeSvg";
import "../Css/CssCustom.css";
import Button from "@material-ui/core/Button";

import { Text } from "rebass";

function HomePage() {
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
              <div className="introparahome">
                <IntroPara></IntroPara>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="homesvghome">
                <HomeSvg></HomeSvg>
              </div>
            </Grid>
          </Grid>


<div>
  
</div>
          <Grid item container xs={12}>
            <Grid item xs={4}>
              <Heading>1</Heading>
            
            </Grid>

            <Grid item xs={4}>
              <Heading>1</Heading>
            </Grid>

            <Grid item xs={4}>
              <Heading>1</Heading>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  );
}

export default HomePage;
