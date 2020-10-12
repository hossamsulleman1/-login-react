import React from "react";
import { Box, Text, Flex } from "rebass";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawerTop from './TopDrawer'

function NavBar() {
  const navStyle = {
    color: "white",
    padding: 5,
    textDecoration: "none",
  };

  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <Text p={3} fontWeight="bold">
        Semptia +
      </Text>



      <Box mx="auto" />


    
      <Link style={navStyle} className="" to="/HomePage">
        Home
      </Link>

      <Link style={navStyle} className="" to="/TrackerPage">
        Trackers
      </Link>

<Link style={navStyle} className="" to="/DashboardPage">
        Dashboard
      </Link>


      <Link style={navStyle} to="/ProfilePage">
        Profile
      </Link>

    
{/* 
      <Link style={navStyle} to="/SignUp">
        SignUp
      </Link> */}

      <Link to="/LoginPage">
        <Avatar alt="HS" src="/static/images/avatar/1.jpg" />
        {/* make this the data from the auth object */}
      </Link>
    </Flex>
  );
}

export default NavBar;
