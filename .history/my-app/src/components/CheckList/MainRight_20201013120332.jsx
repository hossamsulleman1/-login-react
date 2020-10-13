import React from 'react';
import Grid from '@material-ui/core/Grid';


export default function MainRight() {

return (

   <Grid xs={12}>

       <div className="flexbox">

<div className="padding">
<p>NAME OF LIST</p>
</div>


<div className="padding">
<p>NUMBER OF TASKS LEFT IN LIST </p>

</div>

<div>
<Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
</div>
       </div>


   </Grid> 

);

}