import React from 'react';
import Case1 from '../StepperSvg/Case1';
import Grid from '@material-ui/core/Grid';
import User from '.../'

function CaseOne() {
    return(
        <div>
        <Grid item container xs={12}>

        <Grid item xs={6}>
<Case1></Case1>
</Grid>



<Grid item xs={6}>
<p>
Henry Manampiring - " I discovered Stoicism in the middle of a clinical depression episode. Through his reading and practice, Stoicism allowed me to my doctor’s astonishment  to stop taking the prescribed medication and fully overcome depression". 
</p>
</Grid>


        </Grid>


    </div>
    )
}

export default CaseOne;