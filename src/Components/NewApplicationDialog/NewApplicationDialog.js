import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from '@material-ui/core';
import { Fab, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AddIcon from '@material-ui/icons/Add';
import CustomSnackbar from '../CustomSnackbar/CustomSnackbar';
import Axios from 'axios';

class NewApplicationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      successSnackbarOpen: false,
      failSnackbarOpen: false,
      company: '',
      title: '',
      status: '',
      priority: 1,
      appliedDate: new Date(),
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearFields = this.handleClearFields.bind(this);
    this.handleOnAdd = this.handleOnAdd.bind(this);
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

  async handleOnAdd() {
    const { title, company, status, appliedDate, priority } = this.state;
    if (!title || !company || !status || !appliedDate || !priority) {
      this.setState({ failSnackbarOpen: true });
    } else {
      const data = {
        title,
        company,
        status,
        appliedDate,
        priority,
      };
      const res = await Axios.post('/api/application/new', data);
      if (res.status === 200) {
        if (this.props.onAdd) {
          this.props.onAdd();
        }
        this.handleClose();
        this.handleClearFields();
        this.setState({ successSnackbarOpen: true });
      } else {
        this.setState({ failSnackbarOpen: true });
      }
    }
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
          <DialogTitle>New Job Application</DialogTitle>
          <DialogContent>
            <TextField autoFocus
              margin="dense"
              value={this.state.company}
              label="Company"
              type="name"
              onChange={(event) => this.setState({ company: event.target.value })}
              fullWidth />
            <TextField margin="dense"
              value={this.state.title}
              label="Job Title"
              type="name"
              onChange={(event) => this.setState({ title: event.target.value })}
              fullWidth />
            <TextField margin="dense"
              value={this.state.status}
              label="Status"
              type="name"
              onChange={(event) => this.setState({ status: event.target.value })}
              fullWidth />
            <FormControl margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select value={this.state.priority}
                onChange={(event) => this.setState({ priority: event.target.value })} >
                <MenuItem value={0}>Low</MenuItem>
                <MenuItem value={1}>Medium</MenuItem>
                <MenuItem value={2}>High</MenuItem>
              </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="dense"
                variant="inline"
                label="Applied Date"
                format="MM/dd/yyyy"
                value={this.state.appliedDate}
                onChange={(date) => this.setState({ appliedDate: date })}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                fullWidth />
            </MuiPickersUtilsProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { this.handleClearFields(); this.handleClose(); }} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClearFields} color="primary">
              Clear All
            </Button>
            <Button onClick={this.handleOnAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <Fab color="primary" aria-label="add" style={fabStyle} onClick={this.handleOpen}>
          <AddIcon />
        </Fab>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.successSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => this.setState({ successSnackbarOpen: false })} >
          <CustomSnackbar
            onClose={() => this.setState({ successSnackbarOpen: false })}
            variant="success"
            message="Your new job application has been added!" />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.failSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => this.setState({ failSnackbarOpen: false })} >
          <CustomSnackbar
            onClose={() => this.setState({ failSnackbarOpen: false })}
            variant="error"
            message="Unable to add new job application, please try again." />
        </Snackbar>
      </div>
    );
  }
}

NewApplicationDialog.propTypes = {
  onAdd: PropTypes.func,
};

export default NewApplicationDialog;
