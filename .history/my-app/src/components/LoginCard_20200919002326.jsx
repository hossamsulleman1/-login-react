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
    <Typography component="h5" variant="h5">
      Live From Space
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
      Mac Miller
    </Typography>
  </CardContent>
  <div >
  <p></p>
  </div>
</div>
<LoginIcon></LoginIcon>
</Card>
    );

}

export default LoginCard;
