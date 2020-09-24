import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import BarChart from "./GraphWidgets/graphs/BarChart";
import { Heading } from "rebass";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "350px",
    maxHeight: "200px"
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function MiniChartCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <BarChart></BarChart>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Heading>Name</Heading>
                <br></br>
                <Typography variant="body2" color="textSecondary">
                  Total
                </Typography>
                <Heading>
                  12Hrs
                </Heading>
              
              </Grid>
              <Grid item>
                <div className=""BookMark">
                <IconButton aria-label="delete">
  <BookmarkIcon></BookmarkIcon>
</IconButton>
                </div>
     
              </Grid>
            </Grid>
            <Grid item>
              
            <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<TrendingDownIcon />}
                  >
                    12%
                  </Button>
              <br></br>
<br></br>
<Typography variant="body2" color="textSecondary">
                  Completed
                </Typography>
<Heading>
  3/4
</Heading>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

// import React from 'react';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button'
// import CardContent from '@material-ui/core/CardContent';
// import '../App.css';
// import TrendingDownIcon from '@material-ui/icons/TrendingDown';
// import {
//     Heading,

//   } from 'rebass'

// import { makeStyles, useTheme } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "300px",
//     height: "150px",
//     display: 'flex',

//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
// }));

// function MiniChartCard() {

//   const classes = useStyles();
//   const theme = useTheme();

// return (

// <Card className={classes.root}>
//       <div className={classes.details}>
//       <CardContent>
//     <Heading
//   fontSize={[ 4,]}
//   color='Grey'>
//   Reading
// </Heading>

// <Heading fontSize={[4,]}>
//          12hrs
//        </Heading>

//     </CardContent>
//         <div className={classes.controls}>
//         <Button
//         variant="outlined"
//         color="secondary"
//         startIcon={<TrendingDownIcon/>}
//       >

//         12%

//          </Button>

//     <Heading  color="grey" fontSize={[1,]}>
//     from 76% last week
//     </Heading>
//         </div>
//       </div>
//       <CardContent>
//         <Heading>
//           PLACE GRAPH
//         </Heading>
//         </CardContent>
//     </Card>

// );
// }

// export default MiniChartCard;
