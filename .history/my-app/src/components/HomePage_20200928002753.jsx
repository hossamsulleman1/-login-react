import React from 'react';
import Button from '@material-ui/core/Button';
import { Heading } from "rebass";
import  CustomQuoteSearch  from './HomeFolder/CustomQuoteSearch';

function HomePage() {
    return (
 <div>
     <Heading fontSize={[5, 6]} color="primary">
            Home
          </Heading>

{/* 
<Text>
    Quick Track
</Text> */}
<Paper>
    
</Paper>
<CustomQuoteSearch></CustomQuoteSearch>

 </div>       
    )
}

export default HomePage;