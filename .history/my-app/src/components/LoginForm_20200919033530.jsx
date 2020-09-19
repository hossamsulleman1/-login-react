import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Switch } from '@rebass/forms'
import '../App.css';

import {
    Box,
    Text,
    Flex,
    Link,
    Button,
  } from 'rebass'
  import { Label, Checkbox } from '@rebass/forms'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function LoginForm() {
  const classes = useStyles();

  return (
      <Box>
<form className={classes.root} noValidate autoComplete="off">
      <TextField
       id="Username"
       label="Username"
       variant="outlined"
       color="secondary"
      />
      <TextField
        id="Password"
        label="Password"
        variant="outlined"
        color="secondary"
      />
    </form>

<Box>
<Label>
    {/* change to switch <Switch> */}
  <Checkbox
    id='remember'
    name='remember'
  />
  Remember me
</Label>
</Box>
<br></br>
<Button className="loginButton" variant='primary' mr={2}>Log In</Button>
<Button variant="outlined" color="secondary">
  Secondary
</Button>
<br></br>
<Link variant='nav' href='https://rebassjs.org'>Forgotten your
 password?</Link>
<br></br>
<br></br>
<br></br>
<Text>This page is protected by reCAPTCHA and is subject to the Google <Link variant='nav' href='https://rebassjs.org'>Privacy Policy</Link> and <Link variant='nav' href='https://rebassjs.org' >Terms of Service.</Link></Text>
      </Box>
 
     
   

  );
}

export default LoginForm;