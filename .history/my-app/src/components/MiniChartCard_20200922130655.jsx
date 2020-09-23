import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent';
import '../App.css';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import {
    Heading,

  } from 'rebass'

import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "150px",
    display: 'flex',
    padding: "2"
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));




function MiniChartCard() {


  const classes = useStyles();
  const theme = useTheme();

return (


<Card className={classes.root}>
      <div className={classes.details}>
      <CardContent>
    <Heading
  fontSize={[ 4,]}
  color='Grey'>
  Reading
</Heading>

<Heading fontSize={[4,]}>
         12hrs
       </Heading>

    </CardContent>
        <div className={classes.controls}>
        <Button
        variant="outlined"
        color="secondary"
        startIcon={<TrendingDownIcon/>}
      >
      
        12%
        
         </Button>
            
    <Heading  color="grey" fontSize={[1,]}>
    from 76% last week 
    </Heading>
        </div>
      </div>
      <CardContent>
        <Heading>
          PLACE GRAPH
        </Heading>
        </CardContent>
    </Card>

);
}

export default MiniChartCard;