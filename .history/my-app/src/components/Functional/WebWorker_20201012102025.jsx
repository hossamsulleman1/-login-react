import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import worker from "./worker.js";
import WebSet from "./workerSetup";


 function WebWorker() {


	fetchWebWorker = () => {

		this.worker.postMessage('Fetch Users');

		this.worker.addEventListener('message', event => {
			this.setState({
				count: event.data.length
			})
		});
	}


  componentDidMount = () => {
		this.worker = new WebWorker(worker);

	}


  
    


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
InitWorker();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button 
      
      onClick={() => {
        {handleClick};
        {this.fetchWebWorker};
      }}
      
      >Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        // autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        // WEB WORKER TIME ELAPSED AND NAME 
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default WebWorker;