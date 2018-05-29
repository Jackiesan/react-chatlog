import React, { Component } from 'react';
import Message from './Message';


class Chatlog extends Component {

  render() {
    const message = this.props.message
    return (
      <div className='chat-log'>
        <Message
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </div>
    );
  }
}

export default Chatlog;
