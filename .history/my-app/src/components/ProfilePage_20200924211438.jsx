import React from "react";
import "../App.css";
import { Container} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";

import Button from '@material-ui/core/Button';
import {
    Text,
Heading,
  } from 'rebass'



function ProfilePage() {

    return (

<Container>
    
<Heading>Name</Heading>
<Avatar>H</Avatar>
<Button>Add Friends</Button>
<Container>
    {/* USER FRIENDS AVATARS */}
    <Avatar>
        Y
    </Avatar>
    <Avatar>
        E
    </Avatar>
    <Avatar>
        U
    </Avatar>
</Container>

<Text>
    Age
    hours Logged
    Tasks Completed
</Text>


<Container>
    <Text>Graphs here</Text>
    {/* Graphs container */}

    <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>

        </Grid>


</Container>


</Container>



    );
}

export default ProfilePage;