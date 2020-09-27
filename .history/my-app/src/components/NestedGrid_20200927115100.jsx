import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Heading } from "rebass";
import CircleProgress from "./GraphWidgets/graphs/CircleProgress";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
            <Heading>Daily Tracker</Heading>
            <Typography variant="body2" color="textSecondary">
        Favourites
      </Typography>
            <CircleProgress></CircleProgress>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
