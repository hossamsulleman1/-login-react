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
import deepPurple from "@material-ui/core/colors/deepPurple";
import VerticalStepper from "./VerticalStepper";
import ButtonsHome from "./ButtonsHome";
import Typography from "@material-ui/core/Typography";

const color = deepPurple[300];

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
            <Grid item xs={2}>
              <div className="introparahome">
                <IntroPara></IntroPara>
              </div>
            </Grid>

            <Grid item xs={8}>
              <div className="homesvghome">
                <HomeSvg></HomeSvg>
                <div className="buttondivrighthome">
                  <ButtonsHome></ButtonsHome>
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

                  <p className="GridTitle">Capture</p>
                  <br></br>
                  <Typography variant="body2" color="textSecondary">
                    Explore a range of innovative ways to capture your bank
                    account allows you to see what shops you like so why can't
                    you see where you spend your time.
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="iconColouredPurpleDiv">
                  <MenuBookIcon></MenuBookIcon>
                </div>
                <p className="GridTitle">Philosophy</p>
                <br></br>
                <Typography variant="body2" color="textSecondary">
                  Gain knowledge from the best scholars provide yourself mental
                  cruches to cope everyday life and watch the improvements to
                  your ability to live, learn & love.
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <div className="iconColouredPurpleDiv">
                  <BarChartIcon></BarChartIcon>
                </div>
                <p className="GridTitle">Review</p>
                <br></br>
                <Typography variant="body2" color="textSecondary">
                  A collection of comprehensive charts to give meaningful and
                  more statistical insight into your life in addtion to setting
                  a clear objective highlighting progress and steps needed.
                </Typography>
              </Grid>
            </Grid>
          </div>

          <Grid item container xs={12}>
            <div className="centerdiv">
              <p className="SubHeading">EXPLORE THE SEMPTIA WAY</p>
            </div>
          </Grid>

          <div>
            <VerticalStepper></VerticalStepper>
          </div>
        </Grid>

        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  );
}

export default HomePage;
