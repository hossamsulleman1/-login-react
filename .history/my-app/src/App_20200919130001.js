import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./components/HeaderContent.jsx"
import { Grid } from "@material-ui/core";
import LoginCard from './components/LoginCard.jsx'
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import LoginPage from './components/LoginPage';

function App() {
  return (
<ThemeProvider theme={preset}>
<Router>
<Switch>
<Home/>
<Route path="/Profile" component={Profile}/>
<LoginPage/>
<Route path="/Login" component={Login}/>
  <Profile/>
  </Switch> 
</Router>








  </ThemeProvider>
  );
}

export default App;


// whitelist client id for google authentication