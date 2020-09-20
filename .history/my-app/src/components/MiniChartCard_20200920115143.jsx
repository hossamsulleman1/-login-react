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
     
        <Button
        variant="contained"
        // change color w var to show rise or fall ect 
        color="default"
        className={classes.button}
        // make the icon a variable that is dif names for the shit yfm dif icons for up and down and that 
        startIcon={<CloudUploadIcon />}
      >
        <Heading>
            123
        </Heading>
      </Button>
    </CardContent>

    <CardContent ClassName="RightMiniCard">
{/* Graphpreview */}
    </CardContent>

  </Card>

 
)

}

export default MiniChartCard;