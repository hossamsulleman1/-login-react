import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import {
    Text,
    Heading,

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
       <Heading>
         12hrs
       </Heading>
     
        <Button  endIcon={TrendingDownIcon} variant="outlined" color="secondary">
        2.8%
      </Button>
    
      <Text>
          from 76% last week 
      </Text>
    </CardContent>

    <CardContent ClassName="RightMiniCard">
{/* Graphpreview */}
<Text>randomtext graph slot</Text>
    </CardContent>

  </Card>

 
)

}

export default MiniChartCard;