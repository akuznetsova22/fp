import React, { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from "../api/api.js";
import { LogginContext } from "./LoginContext";

function Register() {
  const api = new API();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const {setLoggedIn} = useContext(LogginContext);
  const [validated, setValidated] = useState(false);
  const [firstNameReg, setFirstName] = useState('');
  const [lastNameReg, setLastName] = useState('');
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [addressReg, setAddress] = useState('');
  const [imgSourceReg, setImgSource] = useState(null);
  const [allowLogin, setAllowLogin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [loginStatus,setLoginStatus] = useState('');
  const navigate = useNavigate();




  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true)
    if(validated){
      api.register(firstNameReg,lastNameReg, emailReg, passwordReg, addressReg, imgSourceReg)
      .then((response) => {
        if (response.data.message){
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus(response.data[0].email)
          setAllowLogin(true);
          setLoggedIn(true);
        }
      });
      navigate('/user/login')
    }
  };
  
    return (
      <Container fluid>
          <h2>Registration form:</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  onChange = {(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter your First name.
                </Form.Control.Feedback>        
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  onChange = {(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <Form.Control.Feedback type='valid' >Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter your Last name.
                  </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange = {(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" required
                            onChange = {(e) => {
                              setAddress(e.target.value);
                            }} />
                <Form.Control.Feedback type="invalid">
                  Please provide an address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required 
                            onChange = {(e) => {
                              setPassword(e.target.value);
                          }}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Profile picture</Form.Label>
            <Form.Control type="file"  
                      onChange = {(e) => {
                  setImgSource(e.target.value);
                }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button variant="success" type="submit">Submit form</Button>
        </Form>
      </Container>
    );
  }


export default Register;