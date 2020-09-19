import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import LoginPage from './components/LoginPage';
import NavBar from "./HeaderContent";

function App() {
  return (
<ThemeProvider theme={preset}>
<Router>
<NavBar></NavBar>
<Switch>
{/* <Home/>
<Route path="/Profile" component={Profile}/> */}
<LoginPage/>
<Route path="/Login" component={LoginPage}/>
  {/* <Profile/> */}
  </Switch> 
</Router>








  </ThemeProvider>
  );
}

export default App;


// whitelist client id for google authentication
