import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function PremadeTrackers() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Working Out' },
    { key: 1, label: 'Reading' },
    { key: 2, label: 'Working' },
    { key: 3, label: 'Training' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Cardio' },
    { key: 6, label: 'Sleeping' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div>

    


    <Paper component="ul" className={classes.root}>
      
    <Heading
    className="headingpremade"
  fontSize={[ 5, 6, 7 ]}
  color='primary'>
  Active_Trackers
</Heading>

      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
    </div>
  );
}