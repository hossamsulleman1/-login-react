import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "../Css/CssCustom.css";
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


import {
    Box,
    Text,
    
    Link,
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

function SignUpForm() {
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
       type="password"
        variant="outlined"
        color="secondary"
      />
    </form>

<Box>
  <br></br>
<Label>
    {/* change to switch <Switch> */}
  <Checkbox
    id='remember'
    name='remember'
  />
 <Text fontSize={[2]}
  fontWeight='bold'
  color='black'>Remember me</Text> 
</Label>
</Box>
<br></br>
<div className="loginDiv">


<Button
        variant="contained"
        color="primary"
        className="loginButton"
        startIcon={< GroupAddIcon/>}
      >Sign Up</Button>

</div>

<br></br>
<Link variant='nav' href='https://rebassjs.org'>Forgotten your
 password?</Link>
<br></br>
<br></br>
<Text>This page is protected by reCAPTCHA and is subject to the Google <Link variant='nav' href='https://rebassjs.org'>Privacy Policy</Link> and <Link variant='nav' href='https://rebassjs.org' >Terms of Service.</Link></Text>
      </Box>
 
     
   

  );
}

export default SignUpForm;