import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./App.css";

let apl = null;
setTimeout(() => {
  apl = window.amplitude.getInstance();
  console.log('Amplitude ready.');
}, 2000);

const Amplitude = ({ children }) => {
  const [eventCode, setEventCode] = useState(null);
  
  let debounce = null;
  let handleApi = (event) => {
    clearTimeout(debounce);
    let api = event.target.value;
    // setApi(api);
    debounce = setTimeout(() => {
      // prod c909c7c09a9424c0a0be2f28a2d51272
      // dev  15bbbe2320a5467099a884129cb84e60
      let connected = apl.init(api);
      console.log(connected);
      apl.setUserId('5657167e0f8b2c4cbe71c0ca');
      apl.setUserProperties({'email': 'jt@jtec.at'});
      console.log('Amplitude initialised with ', api);
    }, 2000);
  }
  
  let handleEventCode = (event) => {
      setEventCode(event.target.value);
  }

  let executeCode = (event) => {
    eval(eventCode);
    console.log(eventCode);
    console.log('Submitted.');
    event.preventDefault();
  }
  
  return (
    <>
      <Form>
        <Form.Group controlId="apiKey">
          <Form.Label>Amplitude API Key</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Amplitude API"
            onChange={handleApi.bind(this)}
          />
        </Form.Group>
        <Form.Group controlId="apiKey">
          <Form.Label>Event Code</Form.Label>
          <Form.Control as="textarea" rows="5" 
            onChange={handleEventCode.bind(this)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={executeCode.bind(this)}>
          Test Event
        </Button>
      </Form>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Test Amplitude events</h1>
      <Amplitude className="toast">
      </Amplitude>
    </Jumbotron>
  </Container>
);

export default App;
