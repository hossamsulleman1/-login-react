import React from 'react';
import Button from '@material-ui/core/Button';
import { Heading } from "rebass";
import  CustomQuoteSearch  from './HomeFolder/CustomQuoteSearch';
import Paper from "@material-ui/core/Paper";

function HomePage() {
    return (
 <div>


<Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>

</Grid>















     <Heading fontSize={[5, 6]} color="primary">
            Home
          </Heading>

{/* 
<Text>
    Quick Track
</Text> */}
<Paper>
<CustomQuoteSearch></CustomQuoteSearch>
</Paper>


 </div>       
    )
}

export default HomePage;