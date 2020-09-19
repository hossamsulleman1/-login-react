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
      <Box></Box>
 
     
   

  );
}

export default LoginForm;