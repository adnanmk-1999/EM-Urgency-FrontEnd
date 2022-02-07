import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RespondDialogBox(props) {
  // const [open, setOpen] = React.useState(tru);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>

      <Dialog
        open={true}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Message"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.content}
          </DialogContentText>
          <br></br>
          <DialogContentText id="alert-dialog-slide-description">
            <center>
            <div>Respond:
                <input type="radio" id="" name="response" value="Yes"/>
                <label>Yes</label> &nbsp;
                <input type="radio" id="" name="response" value="No"/>
                <label>No</label>
            </div>
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose}>Submit</Button><br/>
            <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RespondDialogBox;