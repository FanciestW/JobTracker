import React, { Component } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AddIcon from '@material-ui/icons/Add';

class NewApplicationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      company: '',
      title: '',
      status: '',
      appliedDate: new Date(),
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearFields = this.handleClearFields.bind(this);
  }

  handleOpen() {
    this.setState({ open: true, });
  }

  handleClose() {
    this.setState({ open: false, });
  }

  handleClearFields() {
    this.setState({ company: '', title: '', status: '', appliedDate: new Date() });
  }

  handleOnAdd() {
    
  }

  render() {
    const fabStyle = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'absolute',
    };
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Job Application</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              value={this.state.company}
              label="Company"
              type="name"
              onChange={(event) => this.setState({ company: event.target.value })}
              fullWidth />
            <TextField
              margin="dense"
              value={this.state.title}
              label="Job Title"
              type="name"
              onChange={(event) => this.setState({ title: event.target.value })}
              fullWidth />
            <TextField
              margin="dense"
              value={this.state.status}
              label="Status"
              type="name"
              onChange={(event) => this.setState({ status: event.target.value })}
              fullWidth />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                variant="inline"
                label="Applied Date"
                format="MM/dd/yyyy"
                value={this.state.appliedDate}
                onChange={(date) => this.setState({ appliedDate: date })}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }} />
            </MuiPickersUtilsProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { this.handleClearFields(); this.handleClose(); }} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClearFields} color="primary">
              Clear All
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <Fab color="primary" aria-label="add" style={fabStyle} onClick={this.handleOpen}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default NewApplicationDialog;
