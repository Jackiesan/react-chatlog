import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp'

class Message extends Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }

  isRemote() {
    if (this.props.sender === 'Estragon') {
      return 'chat-entry remote'
    }
    return 'chat-entry local'
  }

  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const timeStamp = this.props.timeStamp;

    return (

      <article className={this.isRemote()}>
      <h5 className='entry-name'>{sender}</h5>

      <div className='entry-bubble'>
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
