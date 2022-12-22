import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [validated, setValidated] = useState(false);
  const [firstNameReg, setFirstName] = useState('');
  const [lastNameReg, setLastName] = useState('');
  const [emailReg, setEmail] = useState('');
  const [passwordReg, setPassword] = useState('');
  const [addressReg, setAddress] = useState('');
  const [imgSourceReg, setImgSource] = useState(null);
  // const [isRegistered,setIsRegistered] = useState(false);
  const [allowLogin, setAllowLogin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userID, setUserId] = useState('');
  const [loginStatus,setLoginStatus] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   if (isLoggedIn){
  //     // setUserCookie();
  //     // console.log(userID)
  //     // jsCookie.set('userLoggedIn',userID);
  //     navigate('/user/login')
  //   }
  // },[isLoggedIn])
 function register(){
   return Axios.post('http://localhost:3001/user/register',{
    firstName: firstNameReg,
    lastName: lastNameReg,
    email: emailReg,
    password: passwordReg,
    address: addressReg,
    imgSource: imgSourceReg
  })
}

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    // setUserCookie()
    register().then((response) => {
      if (response.data.message){
        setLoginStatus(response.data.message)
      } else {
        // console.log(response)
        setLoginStatus(response.data[0].email)
        setAllowLogin(true);
        setIsLoggedIn(true);
      }

    });;
    navigate('/user/login')

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
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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