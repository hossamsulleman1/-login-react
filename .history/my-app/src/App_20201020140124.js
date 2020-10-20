import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import preset from "@rebass/preset";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Nav/HeaderContent";
import SignUp from "./components/SignUp/NewUserPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import ProfilePage from "./components/Profile/ProfilePage";
import TrackerPage from "./components/Tracker/TrackerPage";
import TopDrawer from "./components/Nav/TopDrawer";
import CheckListPage from "./components/CheckList/CheckListPage";
import CheckListLandingPage from "./components/CheckList/CheckListLandingPage";
import TrackersLandingPage from "./components/Tracker/TrackersLandingPage";

// GOOGLE AUTH 
import firebase from 'firebase'
import StyledFirebaseAuth from './react-firebaseui/StyledFirebaseAuth'




class App extends Component {


  render() {
  return (
   
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/TopDrawer" component={TopDrawer} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/HomePage" component={HomePage} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/DashboardPage" component={DashboardPage} />
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/TrackersLandingPage" component={TrackersLandingPage} />
          <Route
            path="/CheckListLandingPage"
            component={CheckListLandingPage}
          />
          <Route path="/TrackerPage" component={TrackerPage} />
          <Route path="/CheckListPage" component={CheckListPage} />
        </Switch>
      </Router>
 
  );
}

}
export default App;

// whitelist client id for google authentication
