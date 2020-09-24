import React from "react";
import "../App.css";
import { Container} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {
    Text,
Heading,
  } from 'rebass'



function ProfilePage() {

    return (

<Container>
    
<Heading>Name</Heading>
<Avatar>H</Avatar>
<Button>Add Friends</Button>
<Container>
    {/* USER FRIENDS AVATARS */}
    <Avatar>
        Y
    </Avatar>
    <Avatar>
        E
    </Avatar>
    <Avatar>
        U
    </Avatar>
</Container>

<Text>
    Age
    hours Logged
    Tasks Completed
</Text>


<Container>
    <Text>Graphs here</Text>
    {/* Graphs container */}
</Container>


</Container>



    );
}

export default ProfilePage;