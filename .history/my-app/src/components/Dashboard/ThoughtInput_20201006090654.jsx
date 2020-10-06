import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import QuoteCard from './QuoteCard'
import TrackerTable from './TrackerTable';
import QuoteTable from './QuoteTable';
import Paper from '@material-ui/core/Paper';
import AudioCard from './AudioCard';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60ch',
    },
  },
}));

function ThoughtsInput() {
  const classes = useStyles();

  return (
      <div className="padding">

<div>
<Paper>
<AudioCard></AudioCard>
</Paper>
</div>




<QuoteCard></QuoteCard>
      <br></br>

<br></br>
<QuoteTable></QuoteTable>

      </div>
  );
}

export default ThoughtsInput;