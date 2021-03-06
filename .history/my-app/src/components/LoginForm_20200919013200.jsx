import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Box,
    Text,
    Flex,
    Link
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
       id="Email or Username"
       label="Outlined secondary"
       variant="outlined"
       color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
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

      </Box>
 
     
   

  );
}

export default LoginForm;