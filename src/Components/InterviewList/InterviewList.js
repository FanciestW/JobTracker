import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem } from '@material-ui/core';
import InterviewListItem from '../InterviewListItem/InterviewListItem';

class InterviewList extends Component {
  render() {
    const interviewListItems = this.props.interviews.map((interview, index) => (
      <div key={index}>
        <ListItem>
          <InterviewListItem title={interview.title} company={interview.company} date={interview.date} />
        </ListItem>
        {this.props.divided ? index + 1 < this.props.interviews.length ? <Divider /> : null : null}
      </div>
    ));
    return (
      <List>
        {interviewListItems}
      </List>
    );
  }
}

InterviewList.propTypes = {
  interviews: PropTypes.array,
  widget: PropTypes.bool,
  divided: PropTypes.bool,
};

InterviewList.defaultProps = {
  interviews: [],
  widget: false,
  divided: false,
};

export default InterviewList;
