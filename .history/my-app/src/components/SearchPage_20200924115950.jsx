import React, { Component } from "react";
import {VictoryArea,VictoryArea,VictoryChart,} from "victory";
import ReactDOM from "react-dom";
import App from "../../../App";
import TaskSearchBar from "./TaskSearchBar";
import Paper from '@material-ui/core/Paper';

function SearchPage() {
    return(

<Grid>


<div>
            <Heading>
                Search Tasks or Create a New one
            </Heading>
   <Paper>
<TaskSearchBar></TaskSearchBar>
        </Paper>
        </div>

<div>
<Paper>
    <Heading>
        Tasks 
    </Heading>
</Paper>

<Paper>
    <Heading>
        Triggers
    </Heading>

   <Button>
       Google Home
       </Button> 

      <Button>
          WebHooks
      </Button>

      <Button>
          Discord
      </Button>

      <Button>
          <Apple>
              
          </Apple>
      </Button>
</Paper>


</div>


</Grid>




        
    );
}