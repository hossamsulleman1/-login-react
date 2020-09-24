import React, { Component } from "react";
import {VictoryArea,VictoryArea,VictoryChart,} from "victory";
import ReactDOM from "react-dom";
import App from "../../../App";
import TaskSearchBar from "./TaskSearchBar";
import Paper from '@material-ui/core/Paper';

function SearchPage() {
    return(
        <div>
            <Heading>
                Search Tasks or Create a New one
            </Heading>
   <Paper>
<TaskSearchBar></TaskSearchBar>
        </Paper>
        </div>

<


        
    );
}