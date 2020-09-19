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
  {/* <Button variant='primary' mr={2}>Create An Account</Button> */}
  <Fab variant="extended">
  <AddIcon />
  Sign UP
</Fab>
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
 Sign in
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Provide Your Credentials or Authenticate 
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

  </CardContent>
</div>
<LoginIcon></LoginIcon>
</Card>
    );

}

export default LoginCard;
