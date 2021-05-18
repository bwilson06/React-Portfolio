import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import MessageStatus from "../components/MessageStatus";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setStatus] = useState(false);

  const updateName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const updateMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const submitContactRequest = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      email: email,
      message: message,
    };

    axios
      .post("/send", user)
      .then((response) => {
        setEmail("");
        setName("");
        setMessage("");
        if (response.data.status === "success") {
          console.log("Message Sent.");
          setStatus(true);
          document
            .getElementById("message-status")
            .classList.add("message-status-animation");
          /*setTimeout(() => {
            document
              .getElementById("message-status")
              .classList.remove("message-status-animation");
          }, 2000);
          */
        } else if (response.data.status === "fail") {
          console.log("Message failed to send.");
          setStatus(false);
          document
            .getElementById("message-status")
            .classList.add("message-status-animation");
         /* setTimeout(() => {
            document
              .getElementById("message-status")
              .classList.remove("message-status-animation");
          }, 2000);
          */
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div id="contact" className="contact">
      <Container>
        <hr></hr>
        <div className="contact-header-container">
          <h1 className="contact-header">Contact</h1>
          <h4 style={{ height: "2px", color: "white" }} className="text-center">
            ______
          </h4>
        </div>
        <Form className="contact-form">
          <Form.Group onChange={(e) => updateName(e)} controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" value={name} placeholder="Enter name" />
          </Form.Group>
          <Form.Group
            onChange={(e) => updateEmail(e)}
            controlId="formGroupEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
            />
          </Form.Group>
          <MessageStatus status={messageStatus} />
          <Form.Group
            onChange={(e) => updateMessage(e)}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" value={message} rows={6} />
          </Form.Group>
          <Button
            onClick={(e) => submitContactRequest(e)}
            variant="outline-primary"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
