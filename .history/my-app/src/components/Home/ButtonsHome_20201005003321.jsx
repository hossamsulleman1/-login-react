import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

function ButtonsHome() {
    return (
<div className={classes.root}>

<Button variant="contained"  color="primary" >Invite A Friend</Button>

<Button variant="outlined">Read Docs</Button>
    );
}


export default ButtonsHome;