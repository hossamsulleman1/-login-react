import React from 'react';


function LoginSvg() {
    return (
        <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={2} fontWeight='bold'>Rebass</Text>
        <Box mx='auto' />
       
        <Link variant='nav' href='#'>
          Profile
        </Link>
        
       
      </Flex>
    );
  }
  
  export default LoginSvg;