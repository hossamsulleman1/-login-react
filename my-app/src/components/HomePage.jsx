import React from "react";
import Button from "@material-ui/core/Button";
import { Heading } from "rebass";
import CustomQuoteSearch from "./HomeFolder/CustomQuoteSearch";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { TrendingDownIcon } from '@material-ui/icons/TrendingDown';
 
import
{
    Text
  } from 'rebass';


function HomePage() {
  return (
    <div>
      <Heading fontSize={[5, 6]} color="primary">
        Home
      </Heading>

      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Text>
                Quick Track
            </Text>
        </Grid>
        <Grid item xs={6} sm={6}>
            <Text>Be your own philosiher</Text>
            <Text>Why Not Add a Custom Quote</Text>
            <CustomQuoteSearch></CustomQuoteSearch>
        </Grid>
        <Grid item xs={6} sm={6}>

<div>
<Heading>
  Set Up & Track Using
</Heading>


<div className="homesetupdiv">


<div className='floatleft'>
<Paper className="TrackerPaperInfo">Google Home</Paper>
</div>


<div className='floatright'>
<Paper className="TrackerPaperInfo">WebHooks</Paper>
</div>




</div>


<div className="homesetupdiv">

<div className="floatleft">
<Paper className="TrackerPaperInfo">Apple Iphone/Ipad</Paper>
</div>



<div className='floatright'>
<Paper className="TrackerPaperInfo">More</Paper>
</div>




</div>




</div>




            <Text>Authors SpotLight</Text>

            <Text>
Tracker: with the abilty to track with semptia allows you to see how ooften and for how long this is great for making or breaking habbits 

            </Text>

            <Text>
Quotes: Get a daily slice of your favourite quotes to shape you as a person 'you are only the thoughts you keep in mind so be selective of your reccuring thoughts'
            </Text>
            <div className="changesbutton">
            <Button>Recomend Features/Changes</Button>
            </div>
           
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
