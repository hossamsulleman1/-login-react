import React from 'react';
import {
    Box,
    Text,
    Flex,
    Link
  } from 'rebass'
  import Avatar from '@material-ui/core/Avatar';
  import {Link} from 'react-rou'


function NavBar() {
    return (
        <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={3} fontWeight='bold'>Rebass</Text>
        <Box mx='auto' />
       
        <Link variant='nav' href='#'>
          Profile
        </Link>
        <Avatar alt="HS" src="/static/images/avatar/1.jpg" />
        {/* make this the data from the auth object */}
       
      </Flex>
    );
  }
  
  export default NavBar;
  

