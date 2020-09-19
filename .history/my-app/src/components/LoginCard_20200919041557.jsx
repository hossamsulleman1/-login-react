import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LoginIcon from './LoginSvg'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

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
  <Box width={1/2} px={2}>
  
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='black'>
 Sign in
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Provide Credentials or Authenticate 
    </Typography>
    <br></br>
    <GoogleLogin className="googleLogin"
    clientId="386147001709-5s70gb9e2nnds1bir7f24hltuv879utd.apps.googleusercontent.com"
    buttonText="Sign in with Google Auth"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    isSignedIn={true} 
    cookiePolicy={'single_host_origin'}
  />
  {/* allign this or center  */}
  <br></br>
  <br></br>
<Text className="or">Alternatively</Text>
<br></br>
<LoginForm></LoginForm>
  </Box>
  <Box width={1/2} px={2}>

  <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >


  <LoginIcon></LoginIcon>
  </Box>
</Flex>
  </CardContent>
</div>
</Card>
    );

}

export default LoginCard;
