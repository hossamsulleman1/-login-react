import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import {
    Text,
    Heading,
Box,
Flex,
  } from 'rebass'


function MiniChartCard() {
return (



<Card ClassName="MiniChartCard" variant="outlined">
    
    
    <CardContent>
    <Heading
  fontSize={[ 1,]}
  color='Grey'>
  Name
</Heading>
    </CardContent>

    <CardContent ClassName="LeftMiniCard">
        <Text >
        1111
        </Text>

        <Heading>
            123% ^
        </Heading>
    </CardContent>

    <CardContent ClassName="RightMiniCard">

    </CardContent>

  </Card>

 
)

}

export default MiniChartCard;