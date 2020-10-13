import React from 'react';
import Grid from '@material-ui/core/Grid';


 export default function MainLeft() {

    return(

<div>

<Grid xs={12} >

<div className="padding">
<p >hi</p>
</div>


</Grid>

<Grid xs={1/2}> 

<div className="flexbox">
<div className>
<p>Today</p>
</div>


<div className>
<p>Schedulded</p>
</div>
</div>



</Grid>

<Grid xs={1/2}>

<div className="flexbox">
<div className>
<p>All</p>
</div>


<div className>
<p>Flagged</p>
</div>
</div>




</Grid>

</div>



    );
}