import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


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
        startIcon={<PlaylistAddIcon />}
      >
        Save
      </Button>
</div>
       </div>


   </Grid> 

);

}