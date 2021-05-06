import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <Container style={{ width: "500px" }}>
        <h1 className="text-center">My contacts</h1>
        <h3> Kharkiv, Kharkivs'ka oblast, UA </h3>
        <h3> Phone +38 050 880 38 68</h3>
        <h3> Email: sergio033032@gmail.com</h3>
                   
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>We'el never share your email with anyone else</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textaria</Form.Label>
            <Form.Control as="textaria" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check tupe="checkbox" label="Check me out" />
          </Form.Group>
          <Button viriant="primari" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
     
    );
  }
}
