import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
import SignUpForm from './SignUpForm';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


import {
    Text,
Box,
Flex,
  } from 'rebass'
  import { Label, Checkbox } from '@rebass/forms'
  import { GoogleLogin } from 'react-google-login';
import LoginForm from './LoginForm'
import SignUpIcon from './SignUpSvg';

  const responseGoogle = (response) => {
    console.log(response);
  }

function SignUpCard() {
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
 Sign Up
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Create An account With us 
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
<Text   fontWeight='bold'
  color='black' className="or">Alternatively</Text>
<br></br>
<SignUpForm/>
  </Box>
  <Box width={1/2} px={2}>


  <Link style={navStyle} className="" to="/Home">
  <Button
        variant="contained"
        color="primary"
        className="newUser"
        startIcon={<MeetingRoomIcon />}
      >Login</Button>


  <SignUpIcon></SignUpIcon>
  </Box>
</Flex>
  </CardContent>
</div>
</Card>
    );

}

export default SignUpCard;
