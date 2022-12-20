
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function ChangeAddressPage(props){
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    const linkStyle = {
      margin: "1rem",
      textDecoration: "none",
      color: 'white'
    };
    return (
        <Container fluid>
        <h2>Change address:</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Address</Form.Label>
        <Form.Control type="text" placeholder="Enter new address" required />
        <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please enter your new address.
            </Form.Control.Feedback> 
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile picture</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Container fluid>
      <Button variant="secondary" type="submit"><Link style={linkStyle} to='/user/account'
>       Go Back </Link>
      </Button>
      <Button variant="danger" type="submit">         
      Save changes
      </Button>
      </Container>
    </Form>
        </Container>
    )
}
export default ChangeAddressPage;