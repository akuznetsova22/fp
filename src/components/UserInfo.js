import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function UserInfo(props){
  const navigate = useNavigate();
  function redirect(){
    navigate('/user/orderhistory')
  }
    if (!props.loading){
        return <div>Loading...</div>
    } else {
        return (
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
                <ListGroup.Item>First name: {props.firstName}</ListGroup.Item>
                <ListGroup.Item>Last Name: {props.lastName}</ListGroup.Item>
                <ListGroup.Item>Email: {props.email}</ListGroup.Item>
                <ListGroup.Item>Address: {props.address}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="outline-primary" type="submit">
                  <Link to='/user/changedetails'>Update details </Link>
                </Button>
                <Button onClick={props.logout} variant="danger" type="submit">Logout
                </Button>
              </Card.Body>
              <Button onClick={redirect}>View order history</Button>
            </Card>
          </Col>
          </Row>
        </Container>
      </Container>
        )
    }
}
export default UserInfo;