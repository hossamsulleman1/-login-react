import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveButton from './SaveButton';

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
      <div className="displayflex">
<form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="What's on you'r mind ?" variant="outlined" />
    </form>
    <SaveButton></SaveButton>
      </div>
    
  );
}

export default ThoughtsInput;