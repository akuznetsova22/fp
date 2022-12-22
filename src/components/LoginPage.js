import { Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import jsCookie from "js-cookie";
// import IsLoggedIn from "./IsLogged.js";



function LoginPage(props){
    const [emailInput, setEmail] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [loginStatus,setLoginStatus] = useState('');
    const [allowLogin, setAllowLogin] = useState(false);
    // const [isLoggedIn,setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get('http://localhost:3001/user/login').then((response)=> {
            console.log(response);
            if(response.data.userLoggedIn === true){
                setLoginStatus(response.data.user[0].First_Name);
                setAllowLogin(true);
               }
            })
        //  
      },[loginStatus])
     function login(){
        return Axios.post('http://localhost:3001/user/login',{
          email: emailInput,
          password: passwordInput,
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      login().then((response) => {
        if (response.data.message){
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus(response.data[0].email)
          navigate('/user/account')
        }
      });;


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
                        <Form.Control id='email' type="email" placeholder="Enter email" onChange = {(e) => {
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
                    <h1>{loginStatus}</h1>
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