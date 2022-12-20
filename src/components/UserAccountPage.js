
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function UserAccountPage(props){
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
    return(
        <Container fluid>
        <Container fluid>
          <h2>Welcome, fellow mealprepper!</h2>
<Row>
    <Col >
    <Image roundedCircle src={require('../images/userPic.png')} alt='user Picture'></Image>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User details:</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>First name: Alex</ListGroup.Item>
        <ListGroup.Item>Last Name: Kuznetsova</ListGroup.Item>
        <ListGroup.Item>Email: andymar4ik@gmail.com</ListGroup.Item>
        <ListGroup.Item>Address: Tel Aviv, ***</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="secondary" type="submit"><Link style={linkStyle} to='/user/changedetails'
>       Update details </Link>
      </Button>
      </Card.Body>
    </Card>
    </Col>
</Row>
</Container>
        </Container>
    )
    }
export default UserAccountPage;