import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import worker from './TimerWorker/worker';
import WebWorker from './TimerWorker/workerSetup';
import SaveIcon from '@material-ui/icons/Save';
import { UserData } from '../FirebaseAuth/';


function TimerButton() {
  const workerRef = React.useRef()
  const [count, setCount] = React.useState()
  const [open, setOpen] = React.useState(false);

const EndWebWorker = () => {

  workerRef.current.postMessage('timerStopped');

  workerRef.current.addEventListener('message', event => {
    setCount(event.data.length)
  });

}


  const fetchWebWorker = () => {
		workerRef.current.postMessage('timerStarted');

		workerRef.current.addEventListener('message', event => {
			setCount(event.data.length)
		});
	}

	React.useEffect(() => {
		workerRef.current = new WebWorker(worker);
  }, [])
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleClick();
          fetchWebWorker();
        }}
      
        // onClick={fetchWebWorker}
      >

        TASKNAME
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        // autoHideDuration={6000}
        onClose={handleClose}
        message="TASKNAME Active"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            {/* <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                handleClose();
                EndWebWorker();
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton> */}
          
          <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => {
          handleClose();
          EndWebWorker();
        }}
      >
        Save
      </Button>
          
          
          </React.Fragment>
        }
      />
    </div>
  );
}

export default TimerButton;