import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoldersList from './FoldersList';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

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

<Grid xs={12}>
    <div className="padding">
    <div className="flexbox">
<div>
<p>FOLDERS</p>
</div>

<div>
    <IconButton>
<AddIcon></AddIcon>
    </IconButton>
</div>

<Button className="padding"variant="outlined" >
   OR SHARE A FOLDER ?
</Button>

    </div>
    

    </div>
    
<div>
    <FoldersList></FoldersList>
</div>

</Grid>


</Grid>

</div>



    );
}