import React from "react";
import { Heading } from "rebass";
import Typography from "@material-ui/core/Typography";
import Fonts from "../Css/Fonts.css";
import Divider from '@material-ui/core/Divider';


function IntroPara() {
  return (
    <div>
      <p className="HomeTitle">LIVE.</p>

      <p className="HomeTitle">LEARN.</p>

      <p className="HomeTitle">TRACK.</p>

      <p>┏</p>

      <p className="SubHeading">
        Live Learn A̶d̶a̶p̶t̶ . Live Learn Track With semptia you can cultivate your
        own garden and help others around you to do so aswell.
      </p>

      <p>┗</p>
      <Divider></Divider>

      <p className="SubHeading">SEMPTIA + : A NON FOR PROFIT PROJECT</p>
    </div>
  );
}

export default IntroPara;
