import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveButton from './SaveButton';
import QuoteCard from './QuoteCard'
import TrackerTable from './TrackerTable';
import QuoteTable from './QuoteTable';
import Paper from '@material-ui/core/Paper';
import AudioCard from './AudioCard';


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
      <div className="padding">

<QuoteCard></QuoteCard>
      <br></br>
<div className="displayflex">

<div className="padding">
<Paper>
<div className="displayflex">
<form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="What's on your mind ?" variant="outlined" />
    </form>
    <SaveButton></SaveButton>
      </div>
      <br></br>
      <br></br>
      
      <p>Why not </p>
</Paper>
</div>


<div>
<Paper>
<AudioCard></AudioCard>
</Paper>
</div>


</div>
<br></br>
<QuoteTable></QuoteTable>

      </div>
  );
}

export default ThoughtsInput;