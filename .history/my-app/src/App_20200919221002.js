import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NavBar from "./components/HeaderContent";
import SignUp from './components/NewUserPage';

function App() {
  return (
<ThemeProvider theme={preset}>
<Router>
<NavBar></NavBar>
<Switch>

<Route path="/LoginPage" component={LoginPage}/>
<Route path="/HomePage" component={HomePage}/>
<Route path="/SignUp" component={SignUp}/>

  </Switch> 
</Router>








  </ThemeProvider>
  );
}

export default App;


// whitelist client id for google authentication