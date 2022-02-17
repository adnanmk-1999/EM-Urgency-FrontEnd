import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import axios from 'axios';
import axiosConfig from '../../../helpers/axiosConfig';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function RespondDialogBox(props) {

  const [response, setResponse] = useState({});

  const [responseId] = useState(props.responseId)

  function handleChange(event) {
    const res = event.target.value
    setResponse({"response": res });
  }

  useEffect(() => {
    console.log(response)
  }, [response])


  function handleSubmit() {
    axios(axiosConfig.editConfig(`http://localhost:4010/users/response/${responseId}`, responseId ,response))
      .then(() => {
        alert('Response Submitted !')
        window.location = '/userdashboard'
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        }
      })
  }

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
                <input type="radio" name="response" value="Yes" onChange={handleChange} />
                <label>Yes</label> &nbsp;
                <input type="radio" name="response" value="No" onChange={handleChange} />
                <label>No</label>
              </div>
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.handleClose(); handleSubmit()}}>Submit</Button><br />
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RespondDialogBox;