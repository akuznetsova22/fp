import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api.js";
import { LogginContext } from "./LoginContext";
import { useContext } from "react";

function LoginPage(props){
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const {setLoggedIn} = useContext(LogginContext);
    const navigate = useNavigate();
    const api = new API();
    

    useEffect(() => {
        api.checkLogin()
        .then((response)=> {
            if(response.data.userLoggedIn === true){
                setLoggedIn(response.data.userLoggedIn);
               }
            })
      },[])
     

    const handleSubmit = (event) => {
      event.preventDefault();
      api.login(emailInput, passwordInput).then((response) => {
        if (response.data.message){
        } else {
          setLoggedIn(true);
          navigate('/user/account')
        }
      });
    };

        return (
            <Container fluid>
            <Container fluid>
                <Row>
                    <Col>
                    <h3>Existing user? Login:</h3> 
                    <Form noValidate>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange = {(e) => {
                        setEmail(e.target.value);
                    }}/>
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
                        <Form.Control type="password" placeholder="Password" onChange = {(e) => {
                        setPassword(e.target.value);
                    }}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Login
                    </Button>
                    </Form>
                    </Col>
                    <Col>
                    <h3>New User? Sign up!</h3> 
                    <Button variant="outline-primary" type="submit"><Link to='/user/register'
                    >Sign Up </Link>
                    </Button>
                    <h3>Forgot your password? Not a problem</h3> 
                    <Button variant="outline-primary" type="submit"><Link to='/user/login/forgotpwd'
                    >Restore password </Link>
                    </Button>
                    </Col>
                </Row>
            </Container>
            </Container> 
        )}

export default LoginPage;