import React from 'react';
import './App.css';
import NavBar from "./components/HeaderContent.jsx"
import { Grid } from "@material-ui/core";
import LoginCard from './components/LoginCard.jsx'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'


function App() {
  return (
    <ThemeProvider theme={preset}>
    {props.children}
    <Grid container direction="column">
      <Grid item>
        {/* this is where the header will be  */}
        <NavBar></NavBar>
      </Grid>
              {/* grids can be items grids containers or both at the same time  */}
      <Grid item container>
        {/* on small screens this will take up 2 but on extra smnall screens this will take up 0 as specified   */}
        <Grid item xs={0} sm={2} />

<Grid item xs={12} sm={8}>
{/* this is where the content will be  */}
<LoginCard></LoginCard>
</Grid>
        
        <Grid item xs={0} sm={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  </ThemeProvider>
   
  );
}

export default App;
