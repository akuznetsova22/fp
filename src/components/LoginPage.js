
import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function LoginPage(props){
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
        <Container fluid>
            <Row>
                <Col>
            <h3>Existing user? Login:</h3> 
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Login
            </Button>
        </Form>
                </Col>
                <Col>
        <h3>New User? Sign up!</h3> 
        <Button variant="secondary" type="submit"><Link style={linkStyle} to='/user/register'
>       Sign Up </Link>
      </Button>
            <h3>Forgot your password? Not a problem</h3> 
            <Button variant="secondary" type="submit"><Link style={linkStyle} to='/user/login/forgotpwd'
>       Restore password </Link>
      </Button>
                </Col>
                </Row>
        </Container>
        </Container> 
    )
}
export default LoginPage;