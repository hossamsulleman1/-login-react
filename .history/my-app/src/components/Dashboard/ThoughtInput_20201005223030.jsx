import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveButton from './SaveButton';
import QuoteCard from './QuoteCard'
import TrackerTable from './TrackerTable';
import QuoteTable from './QuoteTable';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ThoughtsInput() {
  const classes = useStyles();

  return (
      <div>

<QuoteCard></QuoteCard>
      
      
<Paper>

</Paper>

<QuoteTable></QuoteTable>

      </div>
  );
}

export default ThoughtsInput;