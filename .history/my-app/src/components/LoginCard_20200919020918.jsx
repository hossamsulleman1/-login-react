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

  <Flex mx={-2}>
  <Box width={1/2} px={2}>
    {/* <Text p={1} color='background' bg='primary'>
      Half
    </Text> */}
  </Box>
  <Box width={1/2} px={2}>
    {/* <Text p={1} color='background' bg='primary'>
      Half
    </Text> */}
  </Box>
</Flex>







  {/* <Button variant='primary' mr={2}>Create An Account</Button> */}
  <Fab  size="small" variant="extended">
  <AddIcon />
  
</Card>
    );

}

export default LoginCard;
