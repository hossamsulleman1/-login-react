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

<div>
<p>Today</p>
</div>


<div>
<p>Schedulded</p>
</div>

</Grid>

<Grid xs={1/2}>

<div>
<div>
<p>All</p>
</div>


<div>
<p>Flagged</p>
</div>
</div>




</Grid>

</div>



    );
}