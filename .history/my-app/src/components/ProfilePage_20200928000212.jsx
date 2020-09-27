import React from "react";
import "../App.css";
import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import RadarChart from "./GraphWidgets/graphs/RadarChart";
// import StackedHistogram from './GraphWidgets/graphs/StackedHistogram'

import { Text, Heading } from "rebass";

function ProfilePage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <Heading>Name</Heading>
          </div>
          <Text>Age</Text>
          <Text>Member Since</Text>
          <Text> Hours Logged</Text>
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
            </Container>
          </div>
        </div>
      </div>
        </Grid>
      </Grid>




     

      <Button>Add Friends</Button>

      <Container>
        <Text>Graphs here</Text>
        {/* Graphs container */}

        <Grid container spacing={3}>
          <Grid item xs>
            {/* <StackedHistogram></StackedHistogram> */}
          </Grid>
          <Grid item xs>
            <RadarChart></RadarChart>
          </Grid>
          <Grid item xs>
            <Paper>
              <Heading>Ppaper idk man</Heading>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default ProfilePage;
