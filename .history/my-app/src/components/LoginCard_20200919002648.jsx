import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LoginIcon from './LoginSvg'
import {
    Text,
   Button,
  } from 'rebass'


function LoginCard() {
    return(
<Card >
<div >
  <CardContent>
  <Button variant='primary' mr={2}>Primary</Button>
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
  Text
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Mac Miller
    </Typography>
  </CardContent>
</div>
<LoginIcon></LoginIcon>
</Card>
    );

}

export default LoginCard;
