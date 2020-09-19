import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LoginIcon from './LoginSvg'
import {
    Text,
   Button,
Box,
  } from 'rebass'
  import { Label, Checkbox } from '@rebass/forms'
  import { GoogleLogin } from 'react-google-login';

function LoginCard() {
    return(
<Card >
<div >
  <CardContent>
  <Button variant='primary' mr={2}>Create An Account</Button>
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
 Sign in
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Provide Your Credentials or Authenticate 
    </Typography>
    <Box>
  <Label>
 
    <Checkbox
      id='remember'
      name='remember'
    />
    <Text>
    Remember me </Text>
  </Label>
</Box>
  </CardContent>
</div>
<LoginIcon></LoginIcon>
</Card>
    );

}

export default LoginCard;
