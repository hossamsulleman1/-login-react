import React from "react";
import "../Css/CssCustom.css";
import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import RadarChart from "../GraphWidgets/graphs/RadarChart";
// import StackedHistogram from "./GraphWidgets/graphs/PieWithLabel";
import Divider from '@material-ui/core/Divider';


import { Text, Heading } from "rebass";
import PieWithLabel from '../GraphWidgets/graphs/PieWithLabel.jsx';

function ProfilePage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <p className="HomeTitleSmall">HI,</p>
           <p className="HomeTitle">NAME</p>
          </div>

<Divider/>
<div className="statsdiv">
            <>Age</>
            <>Member Since</>
            <> Hours Logged</>
            <>Checklist Tasks Completed</>
          </div>
<br></br>
<br></br>
<br></br>
<Divider/>

       
          <div className="statsdiv">
            <Button>Add Friends</Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="avatardiv">
            <Avatar>H</Avatar>

            <div className="friendsdiv">
              <Heading>Friends</Heading>

              <div className="friendsdiv2">
                <Container>
                  {/* USER FRIENDS AVATARS */}
                  <Avatar>Y</Avatar>
                  <Avatar>E</Avatar>
                  <Avatar>U</Avatar>
                  <div className="justifycenter">
                  <Button>Show All Friends</Button>
                  </div>
                 
                </Container>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={3}>
          <p className="">Personal Blend</p>
          <Grid item xs>
            <PieWithLabel></PieWithLabel>
          </Grid>
          <Grid item xs>
            <RadarChart></RadarChart>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default ProfilePage;