import React from 'react';
import {
    Box,
    Text,
    Flex,
  } from 'rebass'

function TaskDataPage(
// params to pass (name,data,stats,minicard)
) {

    return (
<Grid>
<div>
    <Heading>
        Time Spent
        {/* linegraph */}
    </Heading>
</div>

<div>
    <Heading>
        Preformance History
        {/* barChart of the line graph over set months  */}
    </Heading>
</div>

<div>
    Days Missed
</div>


</Grid>


    )
}


export default TaskDataPage;