import React from "react";
import { Heading } from "rebass";
import Typography from "@material-ui/core/Typography";
import Fonts from "../Css/Fonts.css";

function IntroPara() {
  return (
    <div>
      <p className="HomeTitle">LIVE.</p>

      <p className="HomeTitle">LEARN.</p>

      <p className="HomeTitle">TRACK.</p>

      <Typography variant="body2" color="textSecondary">
        Take Control of your day and slowly but surley you will take control of
        your Life
      </Typography>
    </div>
  );
}

export default IntroPara;
