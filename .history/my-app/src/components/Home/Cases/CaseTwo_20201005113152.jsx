import React from 'react';
import Grid from '@material-ui/core/Grid';
import Case2 from '../StepperSvg/Case2';


function CaseTwo() {
    return(
        <div>
            <Grid item container xs={12}>
                
<Grid item xs={6}>
<p>
Henry Manampiring - " I discovered Stoicism in the middle of a clinical depression episode. Through his reading and practice, Stoicism allowed Manampiring—to his doctor’s astonishment— to stop taking the prescribed medication and fully overcome depression. 
</p>
</Grid>

<Grid item xs={6}>
<Case2></Case2>
</Grid>
            </Grid>


        </div>
    )
}

export default CaseTwo;