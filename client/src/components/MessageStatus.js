import React from "react";

const MessageStatus = (props) => {
  if (props.status) {
    return (
        <div>
      <h1 className="message-status" id="message-status">
        Message Sent!
      </h1>
      </div>
    );
  } else {
    return (
      <h1 className="message-status" id="message-status">
        Message Failed!
      </h1>
    );
  }
};

export default MessageStatus;
