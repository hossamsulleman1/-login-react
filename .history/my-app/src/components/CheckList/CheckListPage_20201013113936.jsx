import React from "react";
import Grid from "@material-ui/core/Grid";
import CheckListNav from "./CheckListNav";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";


export default function CheckListPage() {
  
  
  return (

    <div >


<Grid item xs={4}>
{/* LEFT GRID  */}
<MainLeft></MainLeft>
 </Grid>


 <Grid item xs={8}>
{/* RIGHT GRID */}
<MainRight></MainRight>
 </Grid>


    </div>


 
 );

  }
