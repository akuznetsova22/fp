
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function CategoryPage(props){
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
      };
    return(
        <Container fluid>
        <h2>Select what suits your goals best:</h2>
        <Container fluid>
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Lose weight</Card.Title>
            <Card.Img variant="top" src={require('../images/loseWeight.jpg')} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" type="submit"><Link style={linkStyle} to='/category/loseweight/menus'
>       Explore options </Link>
      </Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Build Muscles</Card.Title>
            <Card.Img variant="top" src={require('../images/buildMuscle.jpg')} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" type="submit"><Link style={linkStyle} to='/category/buildmuscle/menus'
>       Explore options </Link>
      </Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>I hate cooking</Card.Title>
            <Card.Img variant="top" src={require('../images/lazy.jpg')} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary" type="submit"><Link style={linkStyle} to='/category/lazy/menus'
>       Explore options </Link>
      </Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </Container>
    )
}
export default CategoryPage;