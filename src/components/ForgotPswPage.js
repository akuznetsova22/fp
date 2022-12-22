import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function ForgotPwdPage(props){
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
        <h2>Forgot password:</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email. Secret code will be sent to your email to restore your access" required />
        <Form.Control.Feedback type='valid' >
            Looks good!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
            Please enter your email.
        </Form.Control.Feedback> 
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Button variant="danger" type="submit">
            Send code
        </Button>
        </Form>
        </Container>
    )
}
export default ForgotPwdPage;