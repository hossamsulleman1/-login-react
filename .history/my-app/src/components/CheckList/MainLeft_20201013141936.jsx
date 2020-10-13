import React from "react";
import Grid from "@material-ui/core/Grid";
import FoldersList from "./FoldersList";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import AddIcon from "@material-ui/icons/Add";

export default function MainLeft() {
  return (
    <div>
      <Grid xs={12}>
        <div className="padding">
          <p>SEARRCH BOX</p>
        </div>
      </Grid>

   <Grid xs={6}>


<div className="flexbox">

</div>

   </Grid>

<Grid xs={6}>

<div className="flexbox">





</div>

</Grid>

        <Grid xs={12}>
          <div className="padding">
            <div className="flexbox">
              <div>
                <p>FOLDERS</p>
              </div>

              <div>
                <IconButton>
                  <AddIcon></AddIcon>
                </IconButton>
              </div>

              <div className="padding">
                <div className="paddingtop">
                  <Button variant="outlined">OR SHARE A FOLDER ?</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FoldersList></FoldersList>
          </div>
        </Grid>
      
    </div>
  );
}
