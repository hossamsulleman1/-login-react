import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name
                  {/* Name js */}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {/* time or times attempted */}
                  12H
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                3/4
              {/* How many times needed to do left*/}
              </Typography>
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