
import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { Navigate } from "react-router-dom";


function LoginPage(props){
    const [validated, setValidated] = useState(false);
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      console.log(validated);
      
    };

    if (validated){
        Cookies.set('userID', '2');
        setTimeout(() => {Cookies.remove('userID')},60000)
        return <Navigate replace to ='/'></Navigate>
        } else {

    return (
        <Container fluid>
        <Container fluid>
            <Row>
                <Col>
            <h3>Existing user? Login:</h3> 
            <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control id='email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Entered email does not match our records.
            </Form.Control.Feedback> 
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
    )}
}
export default LoginPage;