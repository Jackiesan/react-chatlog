import React, { Component } from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class Chatlog extends Component {
  static propTypes = {
    messages: PropTypes.array
  }

  render() {
    const messages = this.props.messages

    const chatMessages = messages.map((message) => {
      return (
        <Message
          key={message.sender}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      );
    })

    return (
      <div className='chat-log'>
        {chatMessages}
      </div>
    );
  }
}

export default Chatlog;
