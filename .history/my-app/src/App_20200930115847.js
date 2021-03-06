import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from 'emotion-theming'
import preset from '@rebass/preset'
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import NavBar from "./components/Nav/HeaderContent";
import SignUp from './components/SignUp/NewUserPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import ProfilePage from './components/Profile/ProfilePage';
import TrackerPage from './components/Tracker/TrackerPage';

function App() {
  return (
<ThemeProvider theme={preset}>
<FirebaseDatabaseProvider>
<Router>
<NavBar></NavBar>
<Switch>

<Route path="/LoginPage" component={LoginPage}/>
<Route path="/HomePage" component={HomePage}/>
<Route path="/SignUp" component={SignUp}/>
<Route path="/DashboardPage" component={DashboardPage}/>
<Route path="/ProfilePage" component={ProfilePage}/>
<Route path="/TrackerPage" component={TrackerPage}/>

  </Switch> 
</Router>
<FirebaseDatabaseProvider></FirebaseDatabaseProvider>







  </ThemeProvider>
  );
}

export default App;


// whitelist client id for google authentication
