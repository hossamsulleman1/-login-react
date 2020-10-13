import React from 'react';
import Grid from '@material-ui/core/Grid';
import FoldersList from './FoldersList';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AllInboxIcon from '@material-ui/icons/AllInbox';
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
<Button variant="contained">Default</Button>
</div>


<div className="padding">


<Button variant="contained">
<div className="flexbox">

<div className="floatleft">

<div className="padding">
<div>
    {/* icon div  */}
<AllInboxIcon></AllInboxIcon>
</div>
<div>
    <p>all</p>
</div>
</div>

    
</div>

<div className="floatright">

<div className="padding">
<p>
    12
</p>
</div>


</div>

</div>
</Button>


</div>





<div className="padding">



<div className="flexbox">

<div className="floatleft">

<div className="padding">
<div>
    {/* icon div  */}
<AllInboxIcon></AllInboxIcon>
</div>
<div>
    <p>all</p>
</div>
</div>

    
</div>

<div className="floatright">

<div className="padding">
<p><Button variant="contained">
    12
</p>
</div>


</div>

</div>
</Button>


</div>

</div>



</Grid>

<Grid xs={1/2}>

<div className="flexbox">

    
<div className="padding">
<Button variant="contained">Default</Button>
</div>


<div className="padding">


<Button variant="contained">
<div className="flexbox">

<div className="floatleft">

<div className="padding">
<div>
    {/* icon div  */}
<AllInboxIcon></AllInboxIcon>
</div>
<div>
    <p>all</p>
</div>
</div>

    
</div>

<div className="floatright">

<div className="padding">
<p>
    12
</p>
</div>


</div>

</div>
</Button>


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

<div className="padding">
<div className="paddingtop">
<Button variant="outlined" >
   OR SHARE A FOLDER ?
</Button>
</div>
</div>




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