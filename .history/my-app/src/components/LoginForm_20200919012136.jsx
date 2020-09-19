import React from 'react';
import {
    Label,
    Input,
    Select,
    Radio,
    Checkbox,
   
  } from '@rebass/forms'

  import {
    Box,
    Flex,
    option,
Button,
  } from 'rebass'

function LoginForm(){
    return (
<Box
  as='form'
  onSubmit={e => e.preventDefault()}
  py={3}>
  <Flex mx={-2} mb={3}>
    <Box width={1/2} px={2}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        placeholder="Gaiel Landu"
      />
    </Box>

    <Box width={1/2} px={2}>
      <Label htmlFor='name'>Name</Label>
      <Input
        id='name'
        name='name'
        placeholder="Gaiel Landu"
      />
    </Box>

   
  </Flex>
  <Flex mx={-2} flexWrap='wrap'>
  
    <Label width={[1/2, 1/4]} p={2}>
      <Checkbox
        id='remember'
        name='remember'
      />
      Remember Me
    </Label>
   
      <Button>
        Beep
      </Button>
   
  </Flex>
</Box>

    );

}

export default LoginForm;
