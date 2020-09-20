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
    <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='black'>
  {N}
</Text>
    </CardContent>

  </Card>

 
)

}

export default MiniChartCard;