import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LoginIcon from './LoginSvg'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {
    Text,
   Button,
Box,
Flex,
  } from 'rebass'
  import { Label, Checkbox } from '@rebass/forms'
  import { GoogleLogin } from 'react-google-login';
import LoginForm from './LoginForm'

  const responseGoogle = (response) => {
    console.log(response);
  }

function LoginCard() {
    return(
<Card >
<div >
  <CardContent>

  <Flex mx={-2}>
  <Box width={1/3} px={2}>
  
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
 Sign in
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Provide Credentials or Authenticate 
    </Typography>
    <GoogleLogin
    clientId="386147001709-5s70gb9e2nnds1bir7f24hltuv879utd.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true} 
    cookiePolicy={'single_host_origin'}
  />
  {/* allign this or center  */}
<Text>Or</Text>
<LoginForm></LoginForm>
  </Box>
  <Box width={1/2} px={2}>
  <Fab  float="right"size="small" variant="extended">
  <AddIcon />
  <Text>Sign UP</Text>
</Fab>
  <LoginIcon></LoginIcon>
  </Box>
</Flex>
  </CardContent>
</div>
</Card>
    );

}

export default LoginCard;
