import React from 'react';
import Grid from '@material-ui/core/Grid';


 export default function MainLeft() {

    return(

<div>

<Grid xs={12}>

<div className="padding">
<p >SEARRCH BOX</p>
</div>


</Grid>

<Grid xs={1/2}> 

<div className="flexbox">
<div className="padding">
<p>Today</p>
</div>


<div className="padding">
<p>Schedulded</p>
</div>
</div>



</Grid>

<Grid xs={1/2}>

<div className="flexbox">
<div className="padding">
<p>All</p>
</div>


<div className="padding">
<p>Flagged</p>
</div>
</div>

<Grid xs=


</Grid>

</div>



    );
}