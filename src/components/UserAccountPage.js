
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import jsCookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Axios from 'axios';


function UserAccountPage(props){
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState(jsCookie.get('firstName'));
  const [lastName, setLastName] = useState(jsCookie.get('lastName'));
  const [email, setEmail] = useState(jsCookie.get('email'));
  const [address, setAddress] = useState(jsCookie.get('address'));
  const navigate = useNavigate();

  useEffect(() => {
  //   checkLogin().then((response) => {
  //     if (response.data.userLoggedIn){
  //       console.log(response.data)
  //       getSessionInfo();
  //     } else {
  //       navigate('/user/login');
  //     }

  // })
  },[])

  function logout(){
    Axios.post('http://localhost:3001/user')
    setIsLoggedIn(false);
    navigate('/user/login');
  }
  function checkLogin(){
    return Axios.get('http://localhost:3001/user/login')
  }

  function getSessionInfo(){
    checkLogin().then((response) => {
      console.log(response.data);
      setFirstName(response.data.user[0].First_Name);
      setLastName(response.data.user[0].Last_Name);
      setEmail(response.data.user[0].Email);
      setAddress(response.data.user[0].Address);
      setIsLoggedIn(true)
  })
}

  // if (!jsCookie.get('userLoggedIn')){
  //   return <Navigate replace to ='/user/login'></Navigate>
  //   } else {
    checkLogin().then((response) => {
      if (response.data.userLoggedIn){
        console.log(response.data)
        getSessionInfo();
      } else {
        navigate('/user/login');
      }

  })
      return(
        <Container fluid>
        <Container fluid>
          <h2>Welcome, fellow mealprepper!</h2>
          <Row>
          <Col>
            <Image roundedCircle src={require('../images/userPic.png')} alt='user Picture'>
            </Image>
          </Col>
          <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>User details:</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>First name: {firstName}</ListGroup.Item>
                <ListGroup.Item>Last Name: {lastName}</ListGroup.Item>
                <ListGroup.Item>Email: {email}</ListGroup.Item>
                <ListGroup.Item>Address: {address}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="outline-primary" type="submit">
                  <Link to='/user/changedetails'>Update details </Link>
                </Button>
                <Button onClick={logout} variant="danger" type="submit">Logout
                </Button>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </Container>
   )}
// }
export default UserAccountPage;