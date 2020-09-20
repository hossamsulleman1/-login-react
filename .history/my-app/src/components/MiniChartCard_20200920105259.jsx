import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import {
    Text,
    
Box,
Flex,
  } from 'rebass'


function MiniChartCard() {
return (



<Card ClassName="MiniChartCard" variant="outlined">
    
    
    <CardContent>
    <Heading
  fontSize={[ 5, 6, 7 ]}
  color='primary'>
  Name
</Heading>
    </CardContent>

  </Card>

 
)

}

export default MiniChartCard;