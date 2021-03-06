import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CreateNewFolderIcon() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton aria-label="delete">
        <CreateNewFolderIcon></CreateNewFolderIcon>
      </IconButton>
    </div>
  );
}
