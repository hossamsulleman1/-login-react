import React from "react";
import { Grid } from "@material-ui/core";
// import TrackerPageList from "./TrackerPageList";
// import TrackerFloatingButtons from "./TrackerFloatingButtons";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import TrackersLandingSvg from "./TrackersLandingSvg";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function TrackersLandingPage() {
  const classes = useStyles();
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
              <div className="paddingright">
                <div className="justifycenter">
                  <TrackersLandingSvg></TrackersLandingSvg>
                </div>
              </div>

              <div>



              <Button variant="outlined" color="secondary">
        Secondary
      </Button>

                
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="padding">
                <p className="HomeTitle">YOU ARE WASTING PRECIOUS TIME !</p>
              </div>
            </Grid>

            <Grid item xs={12}>
              {/* <TrackerPageList></TrackerPageList> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  );
}
