import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LoginIcon from './LoginSvg'


function LoginCard() {
    return(
<Card >
<div >
  <CardContent>
  <Text
  fontSize={[ 3, 4, 5 ]}
  fontWeight='bold'
  color='primary'>
  Text
</Text>
    <Typography variant="subtitle1" color="textSecondary">
      Mac Miller
    </Typography>
  </CardContent>
</div>
<LoginIcon></LoginIcon>
</Card>
    );

}

export default LoginCard;
