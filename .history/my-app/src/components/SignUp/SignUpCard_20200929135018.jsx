import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Css/CssCustom.css";
import Button from "@material-ui/core/Button";
import SignUpForm from "./SignUpForm";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Link } from "react-router-dom";

import { Text, Box, Flex } from "rebass";

import SignUpIcon from "./SignUpSvg";
import { GoogleAuth } from ".//GoogleAuth";

const responseGoogle = (response) => {
  console.log(response);
};

function SignUpCard() {
  return (
    <Card>
      <div>
        <CardContent>
          <Flex mx={-2}>
            <Box width={1 / 2} px={2}>
              <Text fontSize={[3, 4, 5]} fontWeight="bold" color="black">
                Sign Up
              </Text>
              <br></br>
              <Typography variant="subtitle1" color="textSecondary">
                Create An account With us
              </Typography>
              <br></br>
              <GoogleAuth></GoogleAuth>
              {/* allign this or center  */}
              <br></br>
              <br></br>
              <Text fontWeight="bold" color="black" className="or">
                Alternatively
              </Text>
              <br></br>
              <SignUpForm />
            </Box>
            <Box width={1 / 2} px={2}>
              <Link className="" to="/LoginPage">
                <Button
                  variant="contained"
                  color="primary"
                  className="newUser"
                  startIcon={<MeetingRoomIcon />}
                >
                  Login
                </Button>
              </Link>

              <SignUpIcon></SignUpIcon>
            </Box>
          </Flex>
        </CardContent>
      </div>
    </Card>
  );
}

export default SignUpCard;
