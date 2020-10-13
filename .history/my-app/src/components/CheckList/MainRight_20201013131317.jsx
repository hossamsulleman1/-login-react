import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Divider from "@material-ui/core/Divider";
import { Box, Card, Image, Heading, Text } from "rebass";
import Avatar from "@material-ui/core/Avatar";

export default function MainRight() {
  return (
    <Grid xs={12}>
      <div className="flexbox">
        <div className="padding">
          <Heading>Camping</Heading>
        </div>

        <div className="padding">
          <p className="HomeTitleDashboard">12 </p>
          {/* number of tasks leFT */}
        </div>

        <div className="paddingtop">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<PlaylistAddIcon />}
          >
            Add New Reminder
          </Button>
        </div>
      </div>

      <div className="paddingleft">
       <div className="flexbox">
       <div className="padding">
          <Avatar>H</Avatar>
          {/* AVATAR DIVs */}
        </div>

        <div>
          <p className="SubHeading">SHARED WITH SAAD & 9 OTHERS </p>
        </div>
       </div>
       
      
      </div>

div
      <Divider></Divider>

      <div className="paddingtop">
        <p>hisdhaidhsoad</p>
      </div>
    </Grid>
  );
}
