import React from 'react';
import {
    Text,
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
    <P
    </Heading>
</div>

<div>
    <Heading>
        Statistics
    </Heading>

    <Text>
        bullshit about the thing eg 
    Goal: 2 times a day (completed 1/2)
    Created: 3 months ago
    Accuracy: 25% 

    </Text>

<MiniChartCard>
    {/* Pass in params for this data set  */}
</MiniChartCard>

</div>

</Grid>


    )
}


export default TaskDataPage;