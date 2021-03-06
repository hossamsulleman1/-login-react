import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Box,
    Text,
    Flex,
    Link,
    Button
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
  <Checkbox
    id='remember'
    name='remember'
  />
  Remember me
</Label>
</Box>

<Button variant='primary' mr={2}>Log In</Button>

      </Box>
 
     
   

  );
}

export default LoginForm;