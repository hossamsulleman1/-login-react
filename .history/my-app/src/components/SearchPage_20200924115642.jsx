import React, { Component } from "react";
import {VictoryArea,VictoryArea,VictoryChart,} from "victory";
import ReactDOM from "react-dom";
import App from "../../../App";
import TaskSearchBar from "./TaskSearchBar";
import Paper from '@material-ui/core/Paper';

function SearchPage() {
    return(
        <div>
   <Paper>
<TaskSearchBar></TaskSearchBar>
        </Paper>
        </div>
     


        
    );
}