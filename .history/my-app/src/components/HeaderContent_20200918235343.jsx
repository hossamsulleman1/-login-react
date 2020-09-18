import React from 'react';
import {
    Box,
    Text,
    Flex,
    Link
  } from 'rebass'

function NavBar() {
    return (
        <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={2} fontWeight='bold'>Rebass</Text>
        <Box mx='auto' />
        <Text></Text>
       
      </Flex>
    );
  }
  
  export default NavBar;
  

