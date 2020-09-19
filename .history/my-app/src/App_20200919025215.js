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
    
  </ThemeProvider>

   
   
  );
}

export default App;


// whitelist client id for google authentication
