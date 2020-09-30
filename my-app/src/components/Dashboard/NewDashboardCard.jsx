import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import {
Heading,
  } from 'rebass'

import {
    Label,
    Radio,
  } from '@rebass/forms'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 function NewDashboardCard() {
  const classes = useStyles();

  return (
      <Card>
           <CardContent>
           <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Label width={[ 1/2, 1/4 ]} p={2}>
          <Heading>Shape</Heading>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Long
    </Label>


    <Label width={[ 1/2, 1/4 ]} p={2}>
          <Heading>Type</Heading>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Task
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Widget
    </Label>

    </form>
           </CardContent>
      </Card>

  );
}

export default NewDashboardCard;