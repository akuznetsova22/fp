import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


function ChangePwdPage(props){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };
    return (
        <Container fluid>
        <h2>Change password:</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Secret Code</Form.Label>
        <Form.Control type="text" placeholder="Enter code sent to your email" required />
        <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter your secret code.
          </Form.Control.Feedback> 
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="New password"required />
          <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Please create new password.
            </Form.Control.Feedback> 
        </Form.Group>
        <Button variant="success" type="submit">
          Proceed
        </Button>
        </Form>
        </Container>
    )
}
export default ChangePwdPage;