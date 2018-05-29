import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp'

class Message extends Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }

  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;

    return (
      <article className='entry-bubble'>
      <div className='entry-body'>
      <h5 className='entry-name'>{sender}</h5>
      <p className='entry-body'>{body}</p>
      <Timestamp
        time={timeStamp}
      />
      </div>

      </article>
    );
  }
}


export default Message;
