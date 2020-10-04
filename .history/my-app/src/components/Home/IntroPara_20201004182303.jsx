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
       Live Learn Adapt 
      </Typography>
    </div>
  );
}

export default IntroPara;
