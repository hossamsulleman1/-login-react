import React from "react";
import { Heading } from "rebass";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IntroPara from "./IntroPara";
import HomeSvg from "./HomeSvg";
import "../Css/CssCustom.css";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SpeedIcon from "@material-ui/icons/Speed";
import BarChartIcon from "@material-ui/icons/BarChart";

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
                <div className="buttondivrighthome">

                  <Button>Invite A Friend</Button>

                  <Button>Read Docs</Button>
                </div>
              </div>
            </Grid>
          </Grid>

          <div className="containerhome1">
            <Grid item container xs={12} spacing={9}>
              <Grid item xs={4}>
                <div className="speedfloatleft">
                  <div className="iconColouredPurpleDiv">
                    <SpeedIcon></SpeedIcon>
                  </div>

                  <Heading>Capture</Heading>
                  <p>
                    Explore a range of innovative ways to capture your bank
                    account allows you to see what shops you like so why can't
                    you see where you spend your time .
                  </p>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="iconColouredPurpleDiv">
                  <MenuBookIcon></MenuBookIcon>
                </div>
                <Heading>Philosophy</Heading>
                <p>
                  Gain knowledge from the best scholars provide yourself mental
                  cruches to cope everyday life and watch the improvements to
                  your ability to live, learn & love.
                </p>
              </Grid>

              <Grid item xs={4}>
                <div className="iconColouredPurpleDiv">
                  <BarChartIcon></BarChartIcon>
                </div>
                <Heading>Review</Heading>
                <p>
                  A collection of comprehensive charts to give meaningful and
                  more statistical insight into your life.
                </p>
              </Grid>
            </Grid>
         
          
         
         
         
         
          </div>
        
          <Grid item container xs={12}>
{/* 
<div className="centerdiv"> */}
<p className="SubHeading">EXPLORE THE SEMPTIA WAY</p>
{/* </div> */}


        </Grid>
     
        
        </Grid>

        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  );
}

export default HomePage;
