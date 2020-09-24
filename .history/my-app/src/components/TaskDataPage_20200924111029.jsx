import React from 'react';
import {
    Text
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
    <Heading>
    Days Missed
    {/* pie chart of the build up of days missed  */}
    </Heading>
</div>

<div>
    <Heading>
        Statistics
    </Heading>

    <Text>
        bullshit about the thing eg 
    </Text>

<MiniChartCard>
    {/* Pass in params for this data set  */}
</MiniChartCard>

</div>

</Grid>


    )
}


export default TaskDataPage;